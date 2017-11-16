const passport      = require('passport')
    , User          = require('../models/user')
    , secrets       = require('../secrets')
    , JwtStrategy   = require('passport-jwt').Strategy
    , ExtractJwt    = require('passport-jwt').ExtractJwt
    , LocalStrategy = require('passport-local')

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secrets.userToken
}

const localOptions = {
  usernameField: 'email'
}

const jwtAuth = new JwtStrategy(jwtOptions, (payload, done) => {
  console.log('payload from jwt!', payload)
  User.findById(payload.sub, (err, user) => {
    if(err){ return done(err)}
    if(!user){ return done(null, false)}

    done(null, user)
  })
})

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if(err){ return done(err) }
    if(!user){ return done(null, false)}

    // compare passwords
    user.comparePassword(password, (err, isMatch) => {
      if(err){ return done(err)}
      if(!isMatch){ return done(null, false)}
      return done(null, user)
    })
  })
})

passport.use(localLogin)
passport.use(jwtAuth)
