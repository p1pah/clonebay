import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

require('dotenv').config()

const app = express()
const port = 3000
app.use(express.json())

// use it before all route definitions
app.use(cors({ origin: 'http://localhost:8000' }))

//Mongoose - DB Connection
mongoose.connect(process.env.MONGO_DB_URI, {
  dbName: 'clonebayDB',
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('Database connected')
})

//Setting up routers
const indexRouter = require('./routes/index')
const userRouter = require('./routes/userRoutes')
const graphqlController = require('./controllers/graphqlControllers')

app.use('/', indexRouter)
app.use('/users', userRouter)
app.use('/graphql', graphqlController)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
