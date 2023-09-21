import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import router from './routes/index.js'
import { handleError } from './utils/errorUtils.js'
// configure env
dotenv.config()

// rest object
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(router)
if (process.env.DEV_MODE === 'development') {
    app.use(morgan('dev'))
} else {
    app.use(morgan('tiny'))
}

app.use(handleError)

const PORT = process.env.PORT
// run listen
app.listen(PORT, () => {
    console.log(`Server running on mode ${process.env.NODE_ENV} on ${PORT}`)
})
