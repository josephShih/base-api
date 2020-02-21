import { Router } from 'express'
import config from 'config'

const routers = new Router()

routers.get('/version', async (req, res) => {
  const result = {
    status: 200,
    data: { version: config.API_VERSION }
  }
  res.json(result)
})

export default routers
