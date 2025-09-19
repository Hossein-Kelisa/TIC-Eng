// Back-End/middlewares/validateRegister.js
import { body, validationResult } from "express-validator";

export const validateRegister = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage((value, { req }) => req.__("validation.first_name_required")),
  body("lastName")
    .trim()
    .notEmpty()
    .withMessage((value, { req }) => req.__("validation.last_name_required")),
  body("email")
    .isEmail()
    .withMessage((value, { req }) => req.__("validation.valid_email_required"))
    .customSanitizer((value) => value.toLowerCase()),
  body("password")
    .isLength({ min: 6 })
    .withMessage((value, { req }) => req.__("validation.password_min_length")),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password)
      throw new Error(req.__("validation.passwords_no_match"));
    return true;
  }),

  // Final error handler
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
