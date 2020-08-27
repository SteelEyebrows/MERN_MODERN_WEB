const express = require('express');
const router = express.Router();
const {
    registerController,
    signinController,
} = require('../controllers/auth.controller.js');
const {
    validSign,
    validLogin,
} = require('../helpers/valid')

router.post('/register',validSign,registerController);
router.post('/login',validLogin, signinController)

module.exports = router