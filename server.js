const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const chalk = require('chalk')

const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })

connectDB()
const app = express()

//Middleware
const morganMiddleware = morgan(function (tokens, req, res) {
  return [
    '\n\n\n',
    chalk.hex('#ff4757').bold('🍄  Morgan --> '),
    chalk.hex('#34ace0').bold(tokens.method(req, res)),
    chalk.hex('#ffb142').bold(tokens.status(req, res)),
    chalk.hex('#ff5252').bold(tokens.url(req, res)),
    chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
    chalk.hex('#f78fb3').bold('@ ' + tokens.date(req, res)),
    chalk.yellow(tokens['remote-addr'](req, res)),
    chalk.hex('#fffa65').bold('from ' + tokens.referrer(req, res)),
    chalk.hex('#1e90ff')(tokens['user-agent'](req, res)),
    '\n\n\n',
  ].join(' ')
})

app.use(morganMiddleware)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT,
  console.table(`Server running in ${process.env.NODE_ENV} mode on Port ${process.env.PORT}`
  .yellow.inverse))

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.table(`Error ${err.message}`.red.inverse)
  //Close server & exit process
  server.close(() => process.exit(1))
})