const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
});

const Products = mongoose.model('product', ProductSchema);
module.exports = Products;