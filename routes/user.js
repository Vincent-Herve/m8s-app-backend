// Express and router
const express = require('express');
const router = express.Router();

// Controllers
const UserController = require('../controllers/user');

// Middlewares
const auth = require('../middlewares/auth');

// get one user
router.get('/:id', UserController.getUserById)
// route recover
router.post('/recover', UserController.recover);
// route post reset password
router.post('/reset-password', UserController.resetPassword);
// route patch reset password
router.patch('/reset-password', UserController.patchResetPassword);
// route verify account
router.post('/verify-account', UserController.verifyAccount);
// route contact
router.post('/contact', UserController.contactUs);
// edit one profil
router.patch('/:id', auth, UserController.editProfil);
// delete one profil
router.delete('/:id', auth, UserController.unsubscribe);

module.exports = router;