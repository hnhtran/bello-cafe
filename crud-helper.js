// connect database
require('dotenv').config()
require('./config/database')

// require Mongoose models
const User = require('./models/user')
const Item = require('./models/item')
const Category = require('./models/category')
const Order = require('./models/order')

// local variables
let user, item, category, Order
let users, items, categories, orders