import express from 'express'
import { PORT } from './config'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.set('port', PORT)
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


export default app;