import { Router } from 'express'

import users from './users'
import animals from './animals'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(animals)

export default router
