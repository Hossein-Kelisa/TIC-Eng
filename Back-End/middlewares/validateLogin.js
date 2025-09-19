// middlewares/validateLogin.js
import { body, validationResult } from "express-validator";

export const validateLogin = [
  body("email")
    .isEmail()
    .withMessage((value, { req }) => req.__("validation.valid_email_required"))
    .customSanitizer((value) => value.toLowerCase()),
  body("password")
    .notEmpty()
    .withMessage((value, { req }) => req.__("validation.password_required")),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: req.__("validation.validation_failed"),
        errors: errors.array(),
      });
    }
    next();
  },
];
