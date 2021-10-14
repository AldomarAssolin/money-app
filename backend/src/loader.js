const server = require('./config/server')//servidor
require('./config/database')//banco de dados
require('./config/routes')(server)//config das rotas -> server é ligado apartir da constante e da exportação em server.js