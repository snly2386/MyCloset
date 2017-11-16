const mongoose = require('mongoose')
    , Schema   = mongoose.Schema
    , bcrypt   = require('bcrypt-nodejs')

const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String }
})

// on save hook, encrypt password
UserSchema.pre('save', function(next){
  const user = this

  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) { return next(err) }
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function(candidatePassword, callback){
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if(err){
      return callback(err)
    }

    callback(null, isMatch)
  })
}

const User = mongoose.model('user', UserSchema)

module.exports = User
