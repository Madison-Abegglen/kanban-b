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

