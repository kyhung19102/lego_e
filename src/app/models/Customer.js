const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Customer = new Schema({
    username: { type: String },
    password: { type: String },
    name: { type: String },
    address: { type: String },
}, { timestamps: true });
module.exports = mongoose.model('Customer', Customer);