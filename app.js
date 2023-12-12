const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path')
app.set('view engine','ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.urlencoded({ extended: false }));



app.listen(3000 , ()=>{
    console.log('run server on port 3000');
})
