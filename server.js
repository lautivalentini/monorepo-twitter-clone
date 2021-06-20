const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const port = 3000

const cors = require('cors')
const app = express()

const nextApp = next({ dev })
const handler = nextApp.getRequestHandler()

const mongoose = require('mongoose')

let urlMongo = ""

if (process.env.DB_USER) {
  urlMongo = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
} else {
  urlMongo = `mongodb://mongo/twitter`
}

mongoose.connect(urlMongo, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then((db) => console.log(`Connected to Mongo ${db.connection.port}`))
  .catch((err) => console.error(err))

nextApp.prepare().then(() => {
  app.use(cors())
  app.use(express.json())

  app.use('/api/user', require('./routes/users'))

  app.get('*', (req, res) => handler(req, res))

  app.listen(port, (err) => {
    if (err) throw err
    console.log(`Server on at port ${port}`)
  })
})