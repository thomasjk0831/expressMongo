const express = require('express')
const dotenv = require('dotenv')
// const logger = require('./middleware/logger')
const morgan = require('morgan')
const connectDB = require('./config/db')

//load env vars
dotenv.config({
    path: './config/config.env'
})

//connect to database
connectDB()

//Route files
const bootcamps = require('./routes/bootcamps')

const app = express()

//Body parser
app.use(express.json())

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//mount routers
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on
port ${PORT}`))