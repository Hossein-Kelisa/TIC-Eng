import express from 'express';
import { registerUser, loginUser, getMe } from '../controllers/authController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { validateRegister } from '../middlewares/validateRegister.js';

const authRouter = express.Router();

authRouter.post('/register', validateRegister, registerUser);
authRouter.post('/login', loginUser);
authRouter.get('/me', protect, getMe);

export default authRouter;
