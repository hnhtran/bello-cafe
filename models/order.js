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

orderSchema.virtual('orderTotal').get(function() {
    return this.lineItems.reduce((total, item) => {
        return total + item.extPrice
    }, 0)
})

orderSchema.virtual('orderQty').get(function() {
    return this.lineItems.reduce((total, item) => {
        return total + item.qty
    }, 0)
})

orderSchema.virtual('orderId').get(function() {
    return this.id.slice(-6).toUpperCase()
})

orderSchema.statics.getCart = function(userId) {
    return this.findOneAndUpdate(
        { user: userId, isPaid: false },
        { user: userId },
        { upsert: true, new: true}
        )
    .populate('lineItems.item')
}

orderSchema.methods.addItemToCart = async function(itemId) {
    const cart = this
    const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId))
    if (lineItem) {
        lineItem.qty++
    }
    else {
        const item = await mongoose.model('Item').findById(itemId)
        cart.lineItems.push({ item })
    }
    return cart.save()
}

orderSchema.methods.setItemQty = function(itemId, newQty) {
    const cart = this
    const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId))
    if (lineItem && newQty < 0) {
        lineItem.remove()
    }
    else if (lineItem) {
        lineItem.qty = newQty
    }
    return cart.save()
}

module.exports = mongoose.model('Order', orderSchema)