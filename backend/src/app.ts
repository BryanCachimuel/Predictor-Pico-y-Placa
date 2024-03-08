import express from 'express'
import { PORT } from './config'
import morgan from 'morgan'
import cors from 'cors'
import predictorRutas from './routes/predictor.routes'

const app = express()

app.set('port', PORT)
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/predictor",predictorRutas)


export default app;