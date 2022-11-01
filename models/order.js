const mongoose = require('mongoose')
const Schema = mongoose.Schema
const itemSchema = require('./itemSchema')

const lineItemsSchema = new Schema({
    qty: { type: Number, default: 1 },
    item: itemSchema
},
{
    timestamps: true,
    toJSON: { virtuals: true }
}
)

lineItemsSchema.virtual('extPrice').get(function() {
    return this.qty * this.item.price
})

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    lineItems: [lineItemsSchema],
    isPaid: { type: Boolean, default: false },
},
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
    )

module.exports = mongoose.model('Order', orderSchema)