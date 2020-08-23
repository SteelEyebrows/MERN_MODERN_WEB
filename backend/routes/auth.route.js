const express = require('express');
const router = express.Router();
const {
    registerController
} = require('../controllers/auth.controller.js');
const {
    validSign
} = require('../helpers/valid')

router.post('/register',registerController);

module.exports = router