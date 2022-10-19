const path = require('path')
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const hbs = require('express-handlebars')
const app = express();
const env = require('dotenv');
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.use(cookieParser())

const db = require('./config/db');
const route = require('./routes');
// Installation
/*
Nodemon : auto reset;
Morgan:  log http request
express-handlebars: template
* */
// 
env.config()
const port = process.env.PORT;
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// HTTP logger
app.use(morgan('combined'))
// Template engine
app.engine('hbs', hbs.engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
        option: (selected, option) => (selected == option) ? 'selected="selected"' : '',
        user: (req, res)=>{
            let name = req.cookies.customerName;
            if(name) {
                return {
                    name:name
                }
            }
            return false;
        }

    },

}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.static(path.join(__dirname, 'public')));
// 
// Route init
route(app);
db.connect();
app.listen(port, () => {
    console.log(` app listening on port ${port}`)
})

app.use(session({
    
  }))