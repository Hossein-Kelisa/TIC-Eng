// authController.js
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

export const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  // Validate required fields
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return res.status(400).json({  message: res.__("auth.all_fields_required") });
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: res.__("auth.passwords_no_match") });
  }

  try {
    // 1️⃣ Check if user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: res.__("auth.user_exists") });
    }

    // 2️⃣ Create new user
    const newUsers = await User.create({ firstName, lastName, email, password });

    // 3️⃣ Generate JWT token
    const token = generateToken(newUsers._id);

    // 4️⃣ Send cookie (optional) and JSON response
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production'
    });

    // JSON response with token for Postman testing
    res.status(201).json({
      _id: newUsers._id,
      firstName: newUsers.firstName,
      lastName: newUsers.lastName,
      email: newUsers.email,
      token
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1️⃣ Find user by email
    const user = await User.findOne({ email });

    // 2️⃣ Check password
    if (user && await user.matchPassword(password)) {
      const token = generateToken(user._id);

      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
      });

      // Send JSON with token
      res.json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token
      });
    } else {
      res.status(401).json({ message: res.__("auth.invalid_credentials") });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getMe = async (req, res) => {
  res.json(req.user); // req.user is set in authMiddleware
};
