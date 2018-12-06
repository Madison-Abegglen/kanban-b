let express = require('express')
let bP = require('body-parser')
let cors = require('cors')

// fire up connection to database
require('./server-assets/db/mlab-config')

let server = express()
const PORT = process.env.PORT || 3000 // this is for deployment

let whitelist = ['http://localhost:8080']
let corsOptions = {
  origin: function (origin, callback) {
    let originIsWhitelisted = whitelist.indexOf(origin) !== -1
    callback(null, originIsWhitelisted)
  },
  credentials: true
}

// register middleware
server.use(cors(corsOptions))
server.use(bP.json())
server.use(bP.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public'))

// don't let this get re-ordered, leave it !
// you want to register auth routes before the gatekeeper or you wont ever get logged in
let auth = require('./server-assets/auth/routes')
server.use(auth.session)
server.use('/account', auth.router)

// this allows users to get data when not logged in
server.use('*', (req, res, next) => {
  if (req.method == "GET") {
    return next()
  }
  if (!req.session.uid) {
    return next(new Error('Please login to continue.'))
  }
  if (req.method == "POST") {
    req.body.creatorId = req.session.uid
  }
  next()
})

let boardRoutes = require('./server-assets/routes/board-routes')
let listRoutes = require('./server-assets/routes/list-routes')
let taskRoutes = require('./server-assets/routes/task-routes')

server.use('/api/boards', boardRoutes)
server.use('/api/lists', listRoutes)
server.use('/api/tasks', taskRoutes)

server.use('*', (req, res, next) => {
  res.status(error.status || 400).send({ message: error.message })
})

server.listen(PORT, () => {
  console.log("SERVER RUNNING ON PORT: ", PORT)
})