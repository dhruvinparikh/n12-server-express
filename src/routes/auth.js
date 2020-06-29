import { Router } from 'express';
import * as authMiddleware from '../middleware/auth';
import * as loginController from '../controllers/auth';

const router = new Router();

router.post('/login', authMiddleware.authenticate, loginController.login);

export default router;
