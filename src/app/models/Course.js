const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Course = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String, default: "https://www.lego.com/cdn/cs/set/assets/blt8c4442c8dd1ff2bf/76393.jpg" },
    slug: { type: String, slug: 'name', unique:true },
}, { timestamps: true });
module.exports = mongoose.model('Course', Course);