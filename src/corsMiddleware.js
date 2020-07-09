export default function setup (server) {
  server.use((req, res, next) => {
    const allowedOrigins = ['http://api.student.104dc-dev.com']
    const origin = req.headers.origin
    if (allowedOrigins.indexOf(origin) > -1) {
      res.setHeader('Access-Control-Allow-Origin', origin)
    }
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
      'access-control-allow-headers',
      'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent'
    )
    res.header('access-control-allow-methods', 'POST,GET')
    next()
  })
}
