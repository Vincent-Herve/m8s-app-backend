// Express and router
const express = require('express');
const router = express.Router();

// Controllers
const TagController = require('../controllers/tag');

// get all tags
router.get('/', TagController.getAllTags);
// add tag to activity
router.post('/:id/activity', TagController.associateTagToActivity);
// delete tag from activity
router.delete('/:tag_id/activity/:activity_id', TagController.deleteTagFromActivity);

module.exports = router;