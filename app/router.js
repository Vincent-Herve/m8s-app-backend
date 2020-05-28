// Path
const path = require('path');

// Express
const express = require('express');

// Controller
const ActivityController = require('./controllers/ActivityController');
const TagController = require('./controllers/TagController');
const UserController = require('./controllers/UserController');

// Router
const router = express.Router();

// Passport
const passportLocal = require('./authPassport/local');
const passportFacebook = require('./authPassport/facebook');

router.get('/api/activity', ActivityController.getAllActivities);
router.get('/api/tag', TagController.getAllTags);
router.post('/api/auth/isLogged',  UserController.isLogged);

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

// actions de Activity
router.use(ActivityController.closeFinishedActivity);
router.post('/api/activity', ActivityController.createActivity);
router.post('/api/activity/:id/user', ActivityController.associateUserToActivity);
router.patch('/api/activity/:id', ActivityController.editActivity);
router.delete('/api/activity/:id', ActivityController.deleteActivity);
router.delete('/api/activity/:activity_id/user/:user_id', ActivityController.deleteUserFromActivity);

// actions de User
router.get('/auth/facebook', passportFacebook.authenticate('facebook'));
router.get('/auth/facebook/callback', passportFacebook.authenticate('facebook', { successRedirect: '/', failureRedirect: '/signin' }));
router.post('/api/auth/signup', UserController.signup);
router.post('/api/auth/signin', passportLocal.authenticate('local'), UserController.signin);
router.post('/api/auth/disconnect', UserController.disconnect);
router.post('/api/auth/recover', UserController.recover);
router.post('/api/reset-password', UserController.resetPassword);
router.patch('/api/reset-password', UserController.patchResetPassword);
router.post('/api/verify-account', UserController.verifyAccount);
router.post('/api/contact', UserController.contactUs);
router.patch('/api/profil/:id', UserController.editProfil);
router.delete('/api/unsubscribe/:id', UserController.unsubscribe);

// actions de Tag
router.post('/api/activity/:id/tag', TagController.associateTagToActivity);
router.delete('/api/activity/:activity_id/tag/:tag_id', TagController.deleteTagFromActivity);

// Export
module.exports = router;