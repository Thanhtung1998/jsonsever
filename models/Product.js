const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, min: 4, max: 30 },
    brand: { type: String, required: true, min: 4, max: 30 },
    descProduct: { type: String, required: true, max: 500 },
    OldPrice: { type: Number, required: true },
    NewPrice: { type: Number, required: true },
    ColorProduct: { type: Array, default: [] },
    ImgUrlProduct: { type: Object, default: {} },
    DetailProduct: { type: Object, default: {} },
    QuantityProductAndSize: { type: Array, default: [] },
});

// ------------------Document---------------------------

module.exports = mongoose.model('Product', ProductSchema)
