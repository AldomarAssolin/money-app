//definição de serviços restful
//define as operações que serão efetuadas por esse serviço
//put, delete, get, post

const errorHandler = require('../commom/errorHandler')
const BillingCycle = require('./billingCycle')//modelo do mapeamento schemas

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })//retorna a nova instancia quando em uma alteração.
BillingCycle.after('post', errorHandler).after('put', errorHandler)

/*
* Um dos colegas de curso se deparou com o seguinte problema: Todos as rotas estão funcionando, menos a que realiza o GET. 
* Investigamos e de fato, o get retorna apenas um array vazio. Cremos que seja algum problema versão do  node-restful com 
* as demais bibliotecas. Felizmente, podemos circundar esse problema sobrescrevendo a rota Get. Vejam:
* Em billingCycleService.js, adicionar o seguinte trecho de código:
*/

BillingCycle.route('get', (req, res, next) => {
    BillingCycle.find({}, (err, docs) => {
        if (!err) {
            res.json(docs)
        } else {
            res.status(500).json({ errors: [error] })
        }
    })
})

/*
 * Basicamente, o código acima está definindo como uma chamada get, em /api/billingCycles deve se comportar. Dentro da função, 
 * estamos apenas fazendo um find sem passar nenhum parâmetro. Dessa forma, o mongoose busca todos os registros na coleção 
 * BillingCycles de forma indiscriminada. Caso a consulta não produza nenhum erro, na resposta retornamos os documentos. 
 * Caso contrário, retornamos um Status Code 500 e a mensagem de erro proveniente do banco de dados. 
 */

//contador de registros no banco de dados

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

//rota para retornar o sumario da aplicação.
//no doc do mongo fala dessas funções.
BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{
        $project: { credits: { $sum: "$credits.value" }, debits: { $sum: "$debits.value" } }
        //o que será extraído do billingCycles
        //dentro do objeto precisamos buscar o value. Fazer a soma desses valores
    }, {
        $group: { _id: null, credits: { $sum: "$credits" }, debits: { $sum: "$debits" } }//var credit: { $credit e $debt vem do project}
        //agrupa os dacs baseados em alguma expressão específica, ele exige um el _id.. 
        //O group pode ser qualquer identificador.(dia, mês, nome)
        //Se _id fosse ano... retornaria todos os créditos e débitos listados por ano
        //o null pode ser um valor de registro para o identificador
    }, {
        $project: { _id: 0, credits: 1, debits: 1 }//tira o id para que seja extraído apenas crédito e débito
    }], (error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result[0] || { credits: 0, debits: 0 })
        }
    })
})


module.exports = BillingCycle