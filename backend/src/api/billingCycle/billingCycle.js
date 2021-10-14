const restful = require('node-restful')
const mongoose = restful.mongoose
//const mongoose = require('mongoose')

//schema para crédito --> itens da lista
const creditSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true }
})

//schema para débito
const debtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true },
    status: {
        type: String, required: true, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']
    }
})

//ciclo de pagamento
//possui 5 atributos
//Nome, Mês, Ano, Array de créditos(name and value) e Array de débitos(name, value, status and enum)
const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: true},
    month: { type: Number, min: 1, max: 12, required: true },
    year: { type: Number, min: 1970, max: 2110, required: true },
    credits: [creditSchema],
    debits: [debtSchema]
})



module.exports = restful.model('billingcycle', billingCycleSchema)//referencia no mongodb
//module.exports = ('billingCycle', billingCycleSchema)