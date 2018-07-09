const mongoose = require('mongoose')

mongoose.Promise = Promise

const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost:3003/api/produtos'

module.exports = mongoose.connect(url)

