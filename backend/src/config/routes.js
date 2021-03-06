const express = require('express')

//recebe como parâmetro o server
module.exports = function(server){
    //Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas de Ciclo de Pagamento

    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycle')
}