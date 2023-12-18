const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    year: Number,
    desc: String,
    price: Number,
    color: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
