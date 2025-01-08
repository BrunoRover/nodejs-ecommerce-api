const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

require("dotenv/config")
const api = process.env.API_URL
const productRouter = require('./routers/product')

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

//Router
app.use(`${api}/products`, productRouter)

mongoose.connect(process.env.DB).then(()=>{
    console.log("database is ready")
}).catch((err)=>{
    console.log(err)
})
app.listen(3000, ()=>{
    console.log("server is running http://localhost:3000")
})