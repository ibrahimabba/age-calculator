import { Router } from 'express'
import { howOldController } from '../controllers/howOldController.js'
import rateLimiter from '../middlewares/rateLimitter.js'

const router = Router()

router.get('/howold?dob=02/02/1996', rateLimiter, howOldController)

export default router
