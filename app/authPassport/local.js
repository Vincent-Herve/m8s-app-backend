const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const { User } = require('../models/relations');

// Passport Local Strategy
passport.use(new LocalStrategy ({
    usernameField: 'email',
    passwordField: 'password',
},
    function(email, password, done) {
      User.findOne({ where: { email: email } }).then(function(user) {
        if (user) {
            const validPassword = bcrypt.compareSync(password, user.password);
            if (validPassword) {
                return done(null, user);
            }
        }
        console.log("Bad email or password");
        return done(null, false, {message: 'Bad email or password'});
      });
    }
  ));

  module.exports = passport;