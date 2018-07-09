const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    nomeProduto: {type: String, require: true },
    foto: { type: String, require: true},
    description: { type: String},
    preco: { type: Number, default: 0 }
})

module.exports = restful.model('produtos', todoSchema)