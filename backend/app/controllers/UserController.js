// Import
const { User, Tag, Activity } = require('../models/relations');
const { Op } = require("sequelize");
const emailValidator = require('email-validator');
const bcrypt = require('bcryptjs');
var crypto = require("crypto");
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

            // Envoie du mail
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
    // route: POST /api/auth/recover
    recover: async (req, res, next) => {
        try {
            const token = await crypto.randomBytes(32).toString('hex');

            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            });

            if (!user) {
                return response.status(401).json('No account with that email address exists.');
            }

            const expire = Date.now() + 3600000;

            user.resetPasswordToken = token;
            user.resetPasswordExpires = expire;
            
            await user.save();
            
            const mail = {
                from: 'Admin',
                to: user.email,
                subject: 'M8S Password Reset',
                text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                  'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                  req.headers.origin + '/reset/' + token + '\n\n' +
                  'If you did not request this, please ignore this email and your password will remain unchanged.\n'
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
    // route: POST /api/reset-password
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

            return res.status(200).json({ reset: true });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    // route: PATCH /api/reset-password
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

            } else {
                return res.status(401).json('Passwords do not match.');
            }

            const mail = {
                from: 'Admin',
                to: user.email,
                subject: 'Your password has been changed',
                text: 'Hello,\n\n' +
                'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
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

        } catch (error) {
            res.status(500).send(error);
        }
    },
    // route: POST /api/auth/signup
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
            
            if (request.body.password !== passwordConfirm) {
               return response.status(401).json("La confirmation de votre mot de passe a échoué");
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
                return response.status(401).json(`Compte déjà existant`);
            } 
            
            else {
                const mail = {
                    from: 'Admin',
                    to: email,
                    subject: 'M8S - Vérification de votre email',
                    text: 'Bonjour, pour compléter le processus d\'inscription, veuillez cliquer sur le lien suivant pour vérifier votre email.\n\n' +
                      request.headers.origin + '/verify/' + token + '\n\n' +
                      'Si vous n\'êtes pas à l\'origine de cette demande, nous vous prions d\'ignore cette email et votre mot de passe restera inchangé.\n'
                  };
                
                // Envoie du mail
                await transporter.sendMail(mail, (err, data) => {
                    if (err) {
                        response.json({
                        status: 'fail'
                        })
                    } else {
                        response.json({
                        status: 'success'
                        // info:'Votre compte a été créé avec succès et un email de vérification vous a été envoyé.'
                        })
                    }
                });
            }
        } catch (error) {
            response.status(500).send(error);
        }

    },
    // route: PATCH /api/verify-account
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
            return res.status(200).json({ isVerified: true });

        } catch (error) {
            res.status(500).send(error);
        }
    },
    // route: PATCH /api/profil/:id
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
        if (request.session.passport !== undefined) {
            return response.status(200).json({ logged: true, info: { user: request.session.passport.user } });
        } else {
            return response.status(401).json({ logged: false, info: {  } });
        }
    },
    // route: POST /api/auth/disconnect
    disconnect: (request, response) => {
        if (request.session.passport.user) {
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
    },
    // route: POST /signin
    signin: (request, response) => {
        const { user } = request;
        delete user.dataValues.password;
        response.json({info: user});
    }
};

// Export
module.exports = UserController;