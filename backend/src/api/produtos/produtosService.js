const Produtos = require('./Produtos')

Produtos.methods(['get', 'post', 'put', 'delete'])
Produtos.updateOptions({new: true, runValidators: true})

module.exports = Produtos