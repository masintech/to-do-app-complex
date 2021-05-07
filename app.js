const express = require('express')
const app = express()


app.use(express.static('public'))
// second views is golder name
app.set('views', 'views')
// using ejs engine
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('home-guest')
})


app.listen(3000)