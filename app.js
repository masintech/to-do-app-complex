const express = require('express')
const app = express()


const router = require('./router')

app.use(express.static('public'))
// second views is golder name
app.set('views', 'views')
// using ejs engine
app.set('view engine', 'ejs')

app.use('/', router)

app.listen(3000)