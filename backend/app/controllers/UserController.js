// Import
const { User, Tag, Activity } = require('../models/relations');
const emailValidator = require('email-validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const creds = require('../config');

const transport = {
    host: 'smtp.laposte.net', // Don’t forget to replace with the SMTP host of your provider
    port: 465,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });

// UserController
const UserController = {
    // route: POST /contact
    contactUs: (request, response) => {
            const name = request.body.name
            const email = request.body.email
            const message = request.body.message
            const content = `name: ${name} \n email: ${email} \n message: ${message} `

            const mail = {
                from: name,
                to: 'vincent.herve2012@laposte.net', 
                subject: 'New Message from Contact Form',
                text: content
            }

            transporter.sendMail(mail, (err, data) => {
                if (err) {
                response.json({
                    status: 'fail'
                })
                } else {
                response.json({
                status: 'success'
                })
                }
            });
    },
    // route: POST /forgotten
    forgotten: async (req, res, next) => {
        try {
            

        } catch (error) {
            response.status(500).send(error);
        }
    },
    // route: POST /signup
    signup: async (request, response) => {
        try {
            const { username, firstname, lastname, avatar_url, email, password, passwordConfirm } = request.body;

            for (let field in request.body) {
                if (request.body[field] === '') {
                    return response.status(401).json(`Le champ ${field} est obligatoire.`);
                }
            }
            
            let validEmail = emailValidator.validate(email);
            if (!validEmail) {
                delete email;
                return response.status(401).json("Cet email n'est pas valide");
            }
            
            // On vérifie que les 2 champs de mot de passe correspondent
            if (request.body.password !== passwordConfirm) {
               return response.status(401).json("La confirmation de votre mot de passe a échoué");
            }

            // Afin de stocker mon mot de passe en toute sécurité je l'encryp en le hashant avec le modul bcrypt, c'est la valeur retourné que je pourrais stocker en base de données
            // ici maintenant on peut utiliser la function hash au lieu de hashSync et utiliser le mot clé await
            
            const encryptedPassword = await bcrypt.hash(
                password,
                // Ce paramètre va haché 10 fois le mot de passe avec un salt différent à chaque fois
                10
            );
            const [user, created] = await User.findOrCreate({
                where: {
                    email: email
                },
                defaults: {
                    username: username,
                    firstname: firstname,
                    lastname: lastname,
                    avatar_url: avatar_url,
                    password: encryptedPassword
                }
            });
            if (!created) {
                // rendu en cas d'erreur
                return response.status(401).json(`Compte déjà existant`);

            } else {
                return response.status(200).json('Votre compte a été créé avec succès');
            }
        } catch (error) {
            response.status(500).send(error);
        }

    },
    // route: POST /signin
    signin: async (request, response) => {
        try {
            const user = await User.findOne({
                where: {
                    email: request.body.email
                },
                include: [{
                    association: 'activities',
                    include: ['tags']
                },
                {
                    association: 'user_tags'
                }]
            });

            if (!user) {
                return response.status(401).json("Cet email n'existe pas");
            }

            const passwordExpected = user.getPassword();
            const validPassword = await bcrypt.compare(request.body.password, passwordExpected);

            if (!validPassword) {
                return response.status(401).json("Ce n'est pas le bon mot de passe");
            }

            request.session.user = user.dataValues;
            delete request.session.user.password;
            response.status(200).json({ logged: true, info: { user: request.session.user } });
        } catch (error) {
            response.status(500).send(error);
        }
    },
    // route: PATCH /profil/:id
    editProfil: async (request, response) => {
        try {
            
            const userId = request.params.id;
            
            // On récupère l'user associé à l'id de la requête, puis on le modifie
            let user = await User.findByPk(userId);
            if (!user) {
                // pas d'activité pour cet id
                response.status(404).json(`Cant find user with this id : ${userId}`);
                } else {
                    const {avatar_url, email, password, username, firstname, lastname} = request.body;

                    if (avatar_url) {
                        user.avatar_url = avatar_url;
                    }

                    if (email !== '') {
                        let validEmail = emailValidator.validate(email);
                            if (!validEmail) {
                                delete email;
                                return response.status(500).json("Cet email n'est pas valide");
                            } else {
                               user.email = email; 
                            }
                    }

                    if (password !== '') {
                        const encryptedPassword = await bcrypt.hash(
                            password,
                            10
                        );
                        user.password = encryptedPassword;
                    }

                    if (username !== '') {
                        user.username = username;
                    }

                    if (lastname !== '') {
                        user.lastname = lastname;
                    }

                    if (firstname !== '') {
                        user.firstname = firstname;
                    }

                    // On sauvegarde la modification dans la base de données
                    await user.save();

                    response.status(200).json(`Profil modifié avec succès.`);
                }
        } catch (error) {
            response.status(500).send(error);
        }
    },
    // route: POST /isLogged
    isLogged: (request, response) => {
        if (request.session.user) {
            return response.status(200).json({ logged: true, info: { user: request.session.user } });
        } else {
            return response.status(401).json({ logged: false, info: {  } });
        }
    },
    // route: POST /disconnect
    disconnect: (request, response) => {
        if (request.session.user) {
                request.session.destroy();
                response.status(200).json({ logged: false});
        }
    },
    // route: DELETE /unsubscribe/:id
    unsubscribe: async (request, response) => {
        try {
                const userId = request.params.id;
                let user = await User.findByPk(userId);
                
                await user.destroy();
                response.json({ finally: true, info:'Vous êtes maintenant désinscrit. Il vous faudra créer un nouveau compte pour accéder à tous nos services'});
        } catch (error) {
            response.status(500).send(error);
        }
    }
};

// Export
module.exports = UserController;