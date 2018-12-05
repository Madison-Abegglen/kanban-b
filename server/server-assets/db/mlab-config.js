const mongoose = require('mongoose')
const connectionString = 'mongodb://user1:user12@ds044907.mlab.com:44907/kanban-b'
const connection = mongoose.connection

mongoose.connect(connectionString, { useNewUrlParser: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})

connection.once('open', () => {
  console.log('CONNECTED TO DATABASE')
})