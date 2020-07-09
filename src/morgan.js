import config from 'config'
import morgan from 'morgan'

const skip = req => req.path === '/health_check'
export default function configure (server) {
  if (config.DEBUG) {
    server.use(
      morgan('tiny', {
        skip
      })
    )
  }
}
