const AutheticationController = require('../controllers/authentication')
    , passport                = require('passport')
    , passportService         = require('../services/passport')
    , requireSignin           = passport.authenticate('local', { session: false })
    , requireAuth             = passport.authenticate('jwt', { session: false })

module.exports = (app) => {
  app.get('/', requireAuth, (req, res, next) => res.send('some secure shit...') )
  app.post('/signup', AutheticationController.signup)
  app.post('/signin', requireSignin, AutheticationController.signin)
}
