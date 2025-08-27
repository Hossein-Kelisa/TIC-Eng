// middlewares/validateLogin.js
import { body, validationResult } from "express-validator";

export const validateLogin = [
  body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
  body("password").notEmpty().withMessage("Password is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Validation failed",
        errors: errors.array(),
      });
    }
    next();
  },
];
