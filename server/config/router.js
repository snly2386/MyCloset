const AutheticationController = require('../controllers/authentication')

module.exports = (app) => {
  app.post('/signup', AutheticationController.signup)
}
