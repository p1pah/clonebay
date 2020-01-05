const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://clonebayAPP:2La8CsoCKvu5jrsT@clonebaydb-sumpy.gcp.mongodb.net/test?retryWrites=true&w=majority", {dbName : 'clonebayDB'});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))