const {
    check
} = require('express-validator');
exports.validSign = [
    check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
    check('password', 'password is required').notEmpty(),
    check('password').isLength({
        min: 1
    }).withMessage('Password must contain at least 1 characters')
    // .matches(/\d/).withMessage('password must contain a number')
]

exports.validLogin = [
    check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
    check('password', 'password is required').notEmpty(),
    check('password').isLength({
        min: 1
    }).withMessage('Password must contain at least 1 characters')
    // .matches(/\d/).withMessage('password must contain a number')
]


exports.forgotPasswordValidator = [
    check('email')
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Must be a valid email address')
];

exports.resetPasswordValidator = [
    check('newPassword')
        .not()
        .isEmpty()
        .isLength({ min: 6 })
        .withMessage('Password must be at least  6 characters long')
];