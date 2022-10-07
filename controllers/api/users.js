const User = require('../../models/user')
const jwt = require('jsonwebtoken')
module.exports = {
    create
}

async function create(req, res) {
    try {
        const user = await User.create(req.body)
    }
    catch (err) {
        res.status(400).json(err)
    }
}

// ====== Helper functions ======/
function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}