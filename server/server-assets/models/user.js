const mongoose = require('mongoose')
const { Schema } = mongoose

const bcrypt = requrie('bcryptjs')
const SALT = 10

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created: { type: Number, required: true, default: Date.now }
})

// these two methods can be copied for all user schemas
// statics are used to create Model methods
schema.statics.generateHash = function (password) {
  return bcrypt.hashSync(password, SALT)
}

// schema.methods are used to add a method to a model instance
schema.method.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', schema)