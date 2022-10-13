const jwt = require('jsonwebtoken')

module.exports = function checkToken(req, res, next) {
    let token = req.get('Authorization') || req.query.token
    if (token) {
        token = token.replace('Bearer ', '')
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) next(err)
            else {
                req.user = decoded.user
                req.exp = new Date(decoded.exp * 1000)
                return next()
            }
        })
    }
    else {
        req.user = null
        return next()
    }
}