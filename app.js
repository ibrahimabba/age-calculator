import express from 'express'
import howoldRoute from './src/routes/howOldRoute.js'
import cors from 'cors'

const app = express()

app.use(cors())

app.use('/', howoldRoute)

// error handler
app.use(function (err, _req, res, _next) {
  if (err.httpStatusCode) {
    res.status(err.httpStatusCode)
      .json({
        success: false,
        message: err.message || 'Something went wrong, it`ll be nice if you report this to us.',
        status: err.httpStatusCode,
        data: err.data || {}
      })
  } else {
    res.status(500)
      .json({
        success: false,
        message: 'Something went wrong, it`ll be nice if you report this to us.',
        status: 500,
        data: {}
      })
  }
})

export default app
