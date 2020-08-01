// Express and router
const express = require('express');
const router = express.Router();

// Controllers
const ActivityController = require('../controllers/activity');

router.use(ActivityController.closeFinishedActivity);
// get all activities
router.get('/', ActivityController.getAllActivities);
// create one activity
router.post('/', ActivityController.createActivity);
// register to activity
router.post('/:id/user', ActivityController.associateUserToActivity);
// edit one activity
router.patch('/:id', ActivityController.editActivity);
// delete one activity
router.delete('/:id', ActivityController.deleteActivity);
// unsubscribe from the activity
router.delete('/:activity_id/user/:user_id', ActivityController.deleteUserFromActivity);

module.exports = router;