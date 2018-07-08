const mongoose = require('mongoose')

mongoose.Promise = Promise

module.exports = mongoose.connect('mongodb://ds045970.mlab.com:45970/heroku_tg2kvftb')

