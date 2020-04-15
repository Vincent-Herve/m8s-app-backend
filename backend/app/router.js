// Express
const express = require('express');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const { User } = require('./models/relations');

// Controller
const ActivityController = require('./controllers/ActivityController');
const TagController = require('./controllers/TagController');
const UserController = require('./controllers/UserController');

// Router
const router = express.Router();
 
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

  // Store user information into session
passport.serializeUser(function(user, done) {
    return done(null, user);
});
  
  // Get user information out of session
passport.deserializeUser(function(id, done) {
    return done(null, id);
});


// actions de Activity
router.get('/activity', ActivityController.getAllActivities);
router.get('/activity/:id', ActivityController.getActivity);
router.post('/activity', ActivityController.createActivity);
router.post('/activity/search', ActivityController.searchActivity);
router.post('/activity/:id/user', ActivityController.associateUserToActivity);
router.patch('/activity/:id', ActivityController.editActivity);
router.delete('/activity/:id', ActivityController.deleteActivity);
router.delete('/activity/:activity_id/user/:user_id', ActivityController.deleteUserFromActivity);

// actions de User
router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);
router.post('/login', passport.authenticate('local'), UserController.login);
router.post('/isLogged',  UserController.isLogged);
router.post('/disconnect', UserController.disconnect);
router.post('/contact', UserController.contactUs);
router.patch('/profil/:id', UserController.editProfil);
router.delete('/unsubscribe/:id', UserController.unsubscribe);
// router.post('/forgotten', UserController.forgotten);

// actions de Tag
router.get('/tag', TagController.getAllTags);
router.post('/activity/:id/tag', TagController.associateTagToActivity);
router.delete('/activity/:activity_id/tag/:tag_id', TagController.deleteTagFromActivity);
// router.post('/profil/:id/tag', TagController.associateTagToUser);
// router.delete('/profil/:user_id/tag/:tag_id', TagController.deleteTagFromUser);

// Export
module.exports = router;