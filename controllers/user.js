// Import
const { User, Tag, Activity } = require('../models/relations');
const { Op } = require('sequelize');
const emailValidator = require('email-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var crypto = require('crypto');
const nodemailer = require('nodemailer');

const transport = {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
};

// Création et vérification du transporteur afin de pouvoir acheminer les mails avec nodemailer
const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } 
    else {
      console.log('Server is ready to take messages');
    }
  });

// UserController
const UserController = {
    // route: GET /user/:id
    getUserById: async (req, res) => {
        try {
            const userId = req.params.id;

            const user = await User.findOne({
                where: {
                    id: userId
                }
            });
            delete user.dataValues.id;
            delete user.dataValues.password;
            res.status(200).json({
                    user: {
                        username: user.username,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email: user.email
                    }
                });
                
        } catch(error) {
            res.status(500).send(error);
        }
    },
    // route: POST /user/contact
    contactUs: (req, res) => {
            const name = req.body.name
            const email = req.body.email
            const message = req.body.message
            const content = `name: ${name} \n email: ${email} \n message: ${message} `

            const mail = {
                from: name,
                to: 'vincent.herve2012@laposte.net', 
                subject: 'New Message from Contact Form',
                text: content
            }

            // Envoie du mail
            transporter.sendMail(mail, (err, data) => {
                if (err) {
                    res.json({
                        status: 'fail'
                    })
                } else {
                    res.json({
                    status: 'success'
                    })
                }
            });
    },
    // route: POST /user/recover
    recover: async (req, res, next) => {
        try {
            const token = await crypto.randomBytes(32).toString('hex');

            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            });

            if (!user) {
                return res.status(401).json('No account with that email address exists.');
            }

            const expire = Date.now() + 3600000;

            user.resetPasswordToken = token;
            user.resetPasswordExpires = expire;
            
            await user.save();
            
            const mail = {
                from: 'Admin',
                to: user.email,
                subject: 'M8S Réinitialisation mot de passe',
                text: 'Bonjour,\n\n ' +
                  'Vous recevez ce message car vous avez demandé une réinitialisation de votre mot de passe.\n\n' +
                  'Veuillez cliquez sur le lien suivant, ou collez le dans la barre d\'adresse de votre navigateur pour compléter le processus:\n\n' +
                  req.headers.origin + '/reset/' + token + '\n\n' +
                  'Si vous n\'êtes pas à l\'origine de cette requête , vous êtes prié d\'ignorer cet email et votre mot de passe restera inchangé.\n'
              };
            
            // Envoie du mail
            transporter.sendMail(mail, (err, data) => {
                if (err) {
                    res.json({
                        status: 'fail'
                    })
                } else {
                    res.json({
                        status: 'success'
                    })
                }
            });

        } catch (error) {
            res.status(500).send(error);
        }
    },
    // route: POST /user/reset-password
    resetPassword: async (req, res) => {
        try {
            const user = await User.findOne({
                where: {
                    resetPasswordToken: req.body.token,
                    resetPasswordExpires: {
                        [Op.gt]: Date.now()
                    }
                }
            });
            
            if (!user) {
                return res.status(401).json({ reset: false, info: 'Password reset token is invalid or has expired.' });
            }

            res.status(200).json({ reset: true });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    // route: PATCH /user/reset-password
    patchResetPassword: async (req, res) => {
        try {
            const user = await User.findOne({
                where: {
                    resetPasswordToken: req.body.token,
                    resetPasswordExpires: {
                        [Op.gt]: Date.now()
                      }
                }
            });
            
            if (!user) {
                return res.status(401).json('Password reset token is invalid or has expired.');
            }

            if (req.body.password === req.body.passwordConfirm) {
                const encryptedPassword = await bcrypt.hash(
                    req.body.password,
                    10
                );
                user.password = encryptedPassword;
                user.resetPasswordToken = null;
                user.resetPasswordExpires = null;

                await user.save();

            }
            else {
                return res.status(401).json('Passwords do not match.');
            }

            const mail = {
                from: 'Admin',
                to: user.email,
                subject: 'Votre mot de passe a été modifié',
                text: 'Bonjour,\n\n' +
                'Nous vous confirmons que le mot de passe du compte M8S' + user.email + ' a bien été modifié.\n'
            };
            
            // Envoie du mail
            await transporter.sendMail(mail, (err, data) => {
                if (err) {
                    res.json({
                        status: 'fail'
                    })
                } else 
                {
                    res.json({
                        status: 'success'
                    })
                }
            });

        } catch (error) {
            res.status(500).send(error);
        }
    },
    // route: POST /auth/signup
    signup: async (req, res) => {
        try {
            const { username, firstname, lastname, avatar_url, email, password, passwordConfirm } = req.body;

            for (let field in req.body) {
                if (req.body[field] === '') {
                    return res.status(401).json(`Le champ ${field} est obligatoire.`);
                }
            }
            
            const validEmail = emailValidator.validate(email);
            if (!validEmail) {
                delete email;
                return res.status(401).json("Cet email n'est pas valide");
            }
            
            if (password !== passwordConfirm) {
               return res.status(401).json("La confirmation de votre mot de passe a échoué");
            }

            const encryptedPassword = await bcrypt.hash(
                password,
                10
            );

            const token = await crypto.randomBytes(32).toString('hex');
            const expired = await Date.now() + 86400000;

            const [user, created] = await User.findOrCreate({
                where: {
                    email: email
                },
                defaults: {
                    username: username,
                    firstname: firstname,
                    lastname: lastname,
                    avatar_url: avatar_url,
                    password: encryptedPassword,
                    sendVerifyToken: token,
                    expiredVerifyToken: expired
                }
            });
            
            if (!created) {
                return res.status(401).json(`Compte déjà existant`);
            } 
            else {
                const mail = {
                    from: 'Admin',
                    to: email,
                    subject: 'M8S - Vérification de votre email',
                    text: 'Bonjour, pour compléter le processus d\'inscription, veuillez cliquer sur le lien suivant pour vérifier votre email.\n\n' +
                      req.headers.origin + '/verify/' + token + '\n\n'
                  };
                
                // Envoie du mail
                await transporter.sendMail(mail, (err, data) => {
                    if (err) {
                        res.json({
                            status: 'fail'
                        })
                    } else {
                        res.json({
                            status: 'success'
                        })
                    }
                });
            }
        } catch (error) {
            res.status(500).send(error);
        }

    },
    // route: POST /user/verify-account
    verifyAccount: async (req, res) => {
        try {
            const user = await User.findOne({
                where: {
                    sendVerifyToken: req.body.token,
                    isVerified: false,
                    expiredVerifyToken: {
                        [Op.gt]: Date.now()
                      }
                }
            });
            
            if (!user) {
                return res.status(401).json({ isVerified: false, info: 'Verify token is invalid or has expired.' });
            }

            user.sendVerifyToken = null;
            user.expiredVerifyToken = null;
            user.isVerified = true;

            await user.save();
            res.status(200).json({ isVerified: true });

        } catch (error) {
            res.status(500).send(error);
        }
    },
    // route: PATCH /user/:id
    editProfil: async (req, res) => {
        try {
            const userId = req.params.id;
            const {avatar_url, email, password, username, firstname, lastname} = req.body;
            // On récupère l'user associé à l'id de la requête, puis on le modifie
            let user = await User.findByPk(userId);
            if (!user) {
                // pas d'activité pour cet id
                res.status(404).json(`Can't find user with this id : ${userId}`);
                } else {

                    if (avatar_url) {
                        user.avatar_url = avatar_url;
                    }

                    if (email !== '') {
                        let validEmail = emailValidator.validate(email);
                            if (!validEmail) {
                                delete email;
                                return res.status(401).json("Cet email n'est pas valide");
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

                    res.status(200).json(`Profil modifié avec succès.`);
                }
        } catch (error) {
            res.status(500).send(error);
        }
    },
    // route: POST /auth/checkIsLogged
    checkIsLogged: async (req, res) => {
        try {
            const user = await User.findOne({
                where: {
                    id: req.body.userId
                }
            });

            if (!user) {
                return res.status(401).json('Cet utilisateur n\'existe pas');
            }

            res.status(200).json({
                logged: true,
                user: {
                    username: user.username,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email
                }
            });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    // route: DELETE /user/:id
    unsubscribe: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await User.findByPk(userId);
            
            await user.destroy();
            res.json({ finally: true, info: 'Vous êtes maintenant désinscrit. Il vous faudra créer un nouveau compte pour accéder à tous nos services'});
        } catch (error) {
            res.status(500).send(error);
        }
    },
    // route: POST /auth/signin
    signin: async (req, res) => {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            });

            if (!user) {
                return res.status(401).json("Cet email n'existe pas");
            }

            const passwordExpected = user.getPassword();
            const validPassword = await bcrypt.compare(req.body.password, passwordExpected);

            if (!validPassword) {
                return res.status(401).json("Ce n'est pas le bon mot de passe");
            }

            res.status(200).json({
                userId: user.dataValues.id,
                token: jwt.sign(
                    { UserId: user.dataValues.id },
                    'RANDOM_TOKEN_SECRET_KEY',
                    { expiresIn: '1h' }
                )
            });
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

// Export
module.exports = UserController;