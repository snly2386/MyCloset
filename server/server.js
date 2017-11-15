const express    = require('express')
    , bodyParser = require('body-parser')
    , morgan     = require('morgan')
    , mongoose   = require('mongoose')
    , cors       = require('cors')
    , configureRouter = require('./config/router.js')
    , app        = express()


// db setup
mongoose.connect('mongodb://localhost:mycloset/mycloset')

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json({type: '*/*'}))
configureRouter(app)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('listening on...', PORT)
})
