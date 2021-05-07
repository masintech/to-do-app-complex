const mongodb = require('mongodb')
const connectionString = 'mongodb+srv://todoapp:p@ssword@cluster0.r9bhx.mongodb.net/ComplexApp?retryWrites=true&w=majority'


mongodb.connect(connectionString, { useNewUrlParser: true, userUnifiedTopology: true }, function (err, client) {
    module.exports = client.db()
    const app = require('./app')
    app.listen(3000)
})