import { Router } from 'express'

import users from './users'
import animals from './animals'
import facts from './facts'
import rules from './rules'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(animals)
router.use(facts)
router.use(rules)

export default router
