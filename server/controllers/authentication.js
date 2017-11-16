const User    = require('../models/user')
    , jwt     = require('jwt-simple')
    , secrets = require('../secrets')

// let validateSignup = (email, password) {
//   if(!email || !password){
//     res.status(422).send({
//       error: 'You must provide email and password'
//     })
//   }
// }

let tokenForUser = (user) => {
  // issued @ time
  let iat = new Date().getTime()
    , sub = user.id

  return jwt.encode({
    sub,
    iat
  }, secrets.userToken)
}

exports.signup = (req, res, next) => {
  const { email, password } = req.body

  if(!email || !password){
    res.status(422).send({
      error: 'You must provide email and password'
    })
  }

  User.findOne({ email }, (err, existingUser) => {
    if(err){ return next(err) }

    if(existingUser){
      return res.status(422).send({ error: 'Email in use!'})
    }

    const user = new User({ email, password })
    user.save((err, savedUser) => {
      if(err){
        return next(err)
      }

      let token = tokenForUser(savedUser)
      res.json({ token })
    })
  })
}

exports.signin = (req, res, next) => {
  res.send({
    token: tokenForUser(req.user)
  })
}
