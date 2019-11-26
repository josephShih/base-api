import fs from 'fs'
import path from 'path'
import config from 'config'
import winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

const logDirectory = path.resolve(__dirname, '..', 'logs')

// ensure log directory exists
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory)
}

const transports = [
  new DailyRotateFile({
    dirname: logDirectory,
    filename: 'server.log',
    maxFiles: 7,
  }),
]

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports,
})

if (config.DEBUG) {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  )
}

export default logger
