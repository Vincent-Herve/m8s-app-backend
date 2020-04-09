// Express
const express = require('express');

// Controller
const ActivityController = require('./controllers/ActivityController');
const TagController = require('./controllers/TagController');
const UserController = require('./controllers/UserController');

// Router
const router = express.Router();

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