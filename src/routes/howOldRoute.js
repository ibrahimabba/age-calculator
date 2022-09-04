import { Router } from 'express';
import { howOldController } from '../controllers/howOldController.js';
import rateLimiter from '../middlewares/rateLimitter.js';

const router = Router();

router.get('/howold', rateLimiter, howOldController);


export default router