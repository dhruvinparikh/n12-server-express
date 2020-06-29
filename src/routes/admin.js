import { Router } from 'express';
import * as authMiddleware from '../middleware/auth';
import * as userController from '../controllers/user';

const router = new Router();

router.get('/users', authMiddleware.isAuthenticated, authMiddleware.isAdmin, userController.getAll);

export default router;
