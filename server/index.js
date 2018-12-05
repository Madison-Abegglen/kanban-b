let express = require('express')
let bP = require('body-parser')
require('./server-assets/db/mlab-config')

let server = express()
const PORT = process.env.PORT || 3000 // this is for deployment

server.use(bP.json())
server.use(bP.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public'))

// don't let this get re-ordered, leave it !
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