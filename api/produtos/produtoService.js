const Produto = require('./produto');


//Gera a api Rest
Produto.methods(['get','post','put','delete']);

//Retorna o objeto no post e put atualizado
Produto.updateOptions({new: true,runValidators: true});

module.exports = Produto;