import { Router } from 'express'
import common from './commonRouter'
import config from 'config'

const router = Router()

router.use('/', common)

export default router
