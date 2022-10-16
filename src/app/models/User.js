const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
    username: { type: String },
    password: { type: String },
    name: { type: String },
    address: { type: String },
    role_id: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('User', User);