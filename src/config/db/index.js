const mongoose = require('mongoose');

function connect() {
    try {
         mongoose.connect(process.env.DB_URL, (err)=>{
             if(err)
             {
                console.log(err);
             }
             console.log('connect successfully');
        });
    }
    catch (err) {
        console.log('Fail');
    }
}
module.exports = { connect };