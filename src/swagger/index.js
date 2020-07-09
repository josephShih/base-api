import swaggerUi from 'swagger-ui-express'
import { Router } from 'express'

const swaggerApi = require('./swagger.json')

const useSchema = schema => (...args) => swaggerUi.setup(schema)(...args)

const router = Router()
router.use('/', swaggerUi.serve, useSchema(swaggerApi))

export default router
