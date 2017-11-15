const mongoose = require('mongoose')
    , Schema   = mongoose.Schema

const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String }
})

const User = mongoose.model('user', UserSchema)

module.exports = User
