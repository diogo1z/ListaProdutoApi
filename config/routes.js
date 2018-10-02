const express = require('express');

module.exports = function(server){
  //API Rotas
  const router = express.Router();
  server.use('/api', router);

  //Registrando os métodos da api
  const produtoService = require('../produtos/produtoService');
  produtoService.register(router,'/produto');
};