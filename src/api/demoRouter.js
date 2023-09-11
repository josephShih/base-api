import { Router } from 'express'
import demoService from '../service/demoService'
const routers = new Router()

routers.get('/getData', async (req, res, next) => {
  try {
    const result = await demoService.getDemoData()
    /**
    const result = {
      data: category
    } */
    res.json(result)
    // res.send(category.activityCategory).end()
  } catch (error) {
    // if (error && error.status === 500) { error.type = 'page' }
    next(error, req, res)
  }
})
