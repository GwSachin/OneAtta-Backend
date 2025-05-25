import express from 'express';
import { getAllUsers, loginAdmin, registerAdmin } from '../controllers/adminController.js';
import { protect, adminOnly } from '../middlewares/authMiddleware.js';

const router = express.Router();
// POST /admin/register
router.post('/register', registerAdmin);

// POST /admin/login
router.post('/login', loginAdmin);
router.get('/users', protect, adminOnly, getAllUsers);

export default router;
