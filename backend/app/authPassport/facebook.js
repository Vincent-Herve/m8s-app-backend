const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const { User } = require('../models/relations');

// Passport Facebook Strategy
passport.use(new FacebookStrategy({
    clientID: process.env.KEY_CLIENT_ID_FACEBOOK,
    clientSecret: process.env.KEY_CLIENT_SECRET_FACEBOOK,
    callbackURL: "/auth/facebook/callback"
  },
   async function(accessToken, refreshToken, profile, done) {
        let user = await User.findOne({ where: {username: profile.displayName} });
        if (!user) {
          user = await User.create({
            username: profile.displayName,
            email: "",
            firstname: "",
            lastname: "",
            avatar_url: "",
            password: ""
          })
        }
          
      return done(null, user)
    }
));
    
module.exports = passport;