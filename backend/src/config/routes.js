const express = require('express')

module.exports = function(server){

    const router = express.Router()
    server.use('/api', router)

    const todoService = require('../api/produtos/produtosService')
    todoService.register(router, '/produtos')
    
}