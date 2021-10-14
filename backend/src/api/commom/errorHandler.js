const _ = require('lodash')
const nodeRestful = require('node-restful')


//convertento os arrays de erros em array de mensagem padronizadas para erros.
module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if(bundle.errors){
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
        
    }else{
        next()
    }
}


//mensagem de erro capturada no postman (error).
const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}