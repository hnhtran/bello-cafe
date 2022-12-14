const Item = require('../../models/item');

module.exports = {
    index,
    show
}

async function index(req, res) {
    const items = await Item.find({}).sort('name').populate('category').exec();
    console.log(items)
    items.sort((a, b) => a.category.name.localeCompare(b.category.name));
    res.status(200).json(items);
}

async function show(req, res) {
    const item = await Item.findById(req.params.id)
    res.status(200).json(item);
}