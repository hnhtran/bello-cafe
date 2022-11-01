const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    lineItems: [lineItemsSchema],
    isPaid: { type: Boolean, default: false },
},
    {
        timestamps: true,
    }
    )

module.exports = mongoose.model('Order', orderSchema)