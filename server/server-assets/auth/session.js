let expressSession = require('express-session')
let MongoStore = require('connect-mongodb-session')(expressSession)

let store = new MongoStore({
  uri: 'mongodb://user1:user12@ds044907.mlab.com:44907/kanban-b',
  collection: 'Sessions'
})

store.on('error', error => {
  console.log('[SESSION ERROR]', error)
})

let session = expressSession({
  secret: process.env.SESSIONSECRET || 'Woah secrets dont make friends',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365
  },
  store,
  resave: true,
  saveUninitialized: true
})

module.exports = session