const { check, validationResult } = require('express-validator');

exports.validateApplication = [
  check('name').notEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Valid email is required'),
  check('company').notEmpty().withMessage('Company name is required'),
  check('service').notEmpty().withMessage('Service interest is required'),
  check('message').notEmpty().withMessage('Message is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  }
];
