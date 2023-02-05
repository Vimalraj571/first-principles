import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'express-async-errors'

import testimonialRouter from './controller/testimonial.js'
import config from './utils/config.js'

const url = config.URL.replace(/password/i, config.PASS)

// console.log(url)

mongoose.set('strictQuery', false);

mongoose
  .connect(url)
  .then(() => {
   console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.log('Error Connection to MongoDB:', error.message)
  })

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/testimonial', testimonialRouter)


export default app
