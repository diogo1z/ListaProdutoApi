const restful = require('node-restful')
const mongoose = restful.mongoose

const produtoSchema = new mongoose.Schema({
  images: { type: Array, required: false },
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  details: { type: String, required: true },
  priceBefore: { type: Number, min: 0, required: false },
  price: { type: Number, min: 0, required: true }
  })

module.exports = restful.model('Produto', produtoSchema)