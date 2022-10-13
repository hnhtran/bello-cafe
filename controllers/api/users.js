const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    create,
    login,
    checkToken
}

async function create(req, res) {
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json( token )
    }
    catch (err) {
        res.status(400).json(err)
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) return res.status(401).json({ err: 'bad credentials' })
        const match = await bcrypt.compare(req.body.password, user.password)
        if (match) {
            const token = createJWT(user)
            res.json(token)
        }
        else {
            return res.status(401).json({ err: 'bad credentials' })
        }
    } catch (err) {
        return res.status(401).json(err)
    }
}

function checkToken(req, res) {
    console.log('req.user', req.user)
    res.json(req.exp)
}

// ====== Helper functions ======/
function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}