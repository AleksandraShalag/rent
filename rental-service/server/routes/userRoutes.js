import { Router } from 'express';
import upload from '../middleware/upload.js';
import { registration } from '../controllers/userController.js';

const router = new Router();

// Роут для регистрации пользователя с загрузкой аватара
router.post('/register', upload.single('avatar'), registration);

export default router;