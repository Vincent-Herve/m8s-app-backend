// Express and router
const express = require('express');
const router = express.Router();

// Controllers
const UserController = require('../controllers/user');

// Middlewares
const auth = require('../middlewares/auth');

// route signup
router.post('/signup', UserController.signup);
// route signin
router.post('/signin', UserController.signin);
// route check if user is logged
router.post('/checkIsLogged', auth, UserController.checkIsLogged);

module.exports = router;