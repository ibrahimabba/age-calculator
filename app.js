import express from 'express'
import howoldRoute from './src/routes/howOldRoute.js'
import cors from 'cors'

const app = express()

app.use(cors())

app.use('/', howoldRoute)

export default app
