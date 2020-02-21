import config from 'config'
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'

import log from './logger'
import morgan from './morgan'
import corsMiddleware from './corsMiddleware'

export default async () => {
  try {
    const server = express()
    corsMiddleware(server)
    server.use(
      bodyParser.json({
        limit: '50mb'
      })
    )
    server.use(
      bodyParser.urlencoded({
        limit: '50mb',
        extended: true
      })
    )
    server.use(helmet())
    // server.set('trust proxy', 1)
    // setup access.log
    morgan(server)

    server.get('/', (req, res) => res.status(200).send('OK'))
    server.get('/health_check', (req, res) => res.status(200).send('OK'))
    server.use('/api', require('./api').default)
    if (config.NODE_ENV === 'local' || config.NODE_ENV === 'dev') {
      server.use(express.static(path.resolve(__dirname, '..', 'static')))
    }

    server.listen(config.PORT, config.HOST, err => {
      if (err) throw err
      log.info(`> Worker pid:${process.pid} is running`)
      console.log(`> swagger endpoint: http://localhost:${config.PORT}/swagger`)
    })
  } catch (error) {
    console.log('error---->', error)
    log.error('An error occurred, unable to start the server')
    log.error(error)
  }
}
