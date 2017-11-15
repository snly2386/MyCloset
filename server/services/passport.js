const passport      = require('passport')
    , User          = require('../models/user')
    , secrets       = require('../secrets')
    , JwtStrategy   = require('passport-jwt').Strategy
    , ExtractJwt    = require('passport-jwt').ExtractJwt
    , LocalStrategy = require('passport-local')
