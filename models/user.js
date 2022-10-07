const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schame ({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    }
},
    {timestamps: true,}
)

module.exports = mongoose.model('User', 'userSchema')s