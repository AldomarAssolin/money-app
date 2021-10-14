/**
 * O cors habilita o compartilhamento de recursos de origens distintas, outros servidores.
 * Segurança para não ser atacado por outras origens
 * no localhost as portas diferentes das pastas backend e frontend já caracteriza origem diferentes
 * O cors deve ser habilitado para essa função funcionar
 */

module.exports = (res, req, next) => {
    req.header('Access-Control-Allow-Origin', '*')
    req.header('Access-Control-Allow-Credentials', true)
    req.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATH, DELETE')
    req.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Max-Age', '86400')
    next()
}