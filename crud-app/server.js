require('dotenv').config({path :`config.env`})

const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require("./server/database/connection");

const app = express();



const PORT = process.env.PORT || 8000

//log request
app.use (morgan('tiny'));
connectDB() //nomgodb connection//

//parse request to body parser
app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine", "ejs")

//load asset
app.use('/css', express.static(path.resolve(__dirname, "asset/css")))
app.use('/js', express.static(path.resolve(__dirname, "asset/js")))




app.use('/' , require('./server/routes/router'))

app.listen(PORT, ()=>{
    console.log(`Server is running on https://localhoast:${PORT}`)
});