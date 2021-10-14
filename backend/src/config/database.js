//conecção com mongo db

const mongoose = require('mongoose')
mongoose.Promise = global.Promise// atribui a api promisse para o mongoose que ta deprecated
//caminho para o banco de dados, onde mymoney é a table.
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useMongoClient: true})

mongoose.Error.messages.general.require = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maoir que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}'não é válido para o atributo '{PATH}'."