const mongoose = require('mongoose');

const ImovelSchema = mongoose.Schema({
    cidade: String,
    titulo: String,
    descricao: String,
    tipo: String,
    preco: Number,
    qntdAluguel: Number,
    qntdQuartos: Number,
    url: String
});

module.exports = mongoose.model('PostImage', ImovelSchema);