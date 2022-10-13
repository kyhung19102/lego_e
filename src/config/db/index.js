const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://kyhung123:kyhung123@cluster0.hfpvd3u.mongodb.net/f8_education_dev');
        console.log('connect successfully')
    }
    catch (err) {
        console.log('Fail');
    }
}
module.exports = { connect };