const express = require('express')
const session = require('express-session')
const app = express()

let sessionOptions = session({
  secret: "JavaScript is sooooooooo coool",
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 1000 * 60 * 60 * 24, httpOnly: true}
})

app.use(sessionOptions)


const router = require('./router')


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static('public'))
// second views is golder name
app.set('views', 'views')
// using ejs engine
app.set('view engine', 'ejs')

app.use('/', router)

module.exports = app