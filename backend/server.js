require('dotenv').config()

const express = require('express')
const healthRoutes = require('./routes/healthRoutes')
const connectDB = require('./config/db')

const app = express()
const PORT = process.env.PORT || 5000

connectDB()

app.use(express.json())

app.use('/api', healthRoutes)

app.get('/', (req, res) => {
  res.json({
    message: 'Secure Student Portal API is running',
  })
})


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})