const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lineItemsSchema = new Schema({
    qty: { type: Number, default: 1 },
    item: itemSchema
},
{
    timestamps: true,
}
)

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