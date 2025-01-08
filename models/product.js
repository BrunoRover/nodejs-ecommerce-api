const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    name: String,
    image: String,
    count: Number
})
exports.Product = mongoose.model("products", productsSchema)