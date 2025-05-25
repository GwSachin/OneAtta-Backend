import express from 'express';
import validate from '../middlewares/validateMiddleware.js';
import { loginSchema, registerSchema } from '../validators/authSchemas.js';
import { loginUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', validate(registerSchema), registerUser);
router.post('/login', validate(loginSchema), loginUser);

export default router;
