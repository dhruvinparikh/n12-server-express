import { Router } from 'express';
import * as authMiddleware from '../middleware/auth';
import * as userController from '../controllers/user';

const router = new Router();

router.get('/', authMiddleware.isAuthenticated, userController.getUser);

export default router;
