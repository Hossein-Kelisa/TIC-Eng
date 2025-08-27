import express from 'express';
import { registerUser, loginUser, getMe } from '../controllers/authController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { validateRegister } from '../middlewares/validateRegister.js';
import { validateLogin } from '../middlewares/validateLogin.js';

const authRouter = express.Router();

authRouter.post('/register', validateRegister, registerUser);
authRouter.post('/login', validateLogin, loginUser);
authRouter.get('/me', protect, getMe);

export default authRouter;
