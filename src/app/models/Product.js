const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Product = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    price: { type: Number },
    categoryId: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, { timestamps: true });
module.exports = mongoose.model('Product', Product);