const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({},
    {
        timestamps: true,
    }
    )

module.exports = mongoose.model('Order', orderSchema)