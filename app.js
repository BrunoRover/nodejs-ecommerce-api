const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

require("dotenv/config")
const api = process.env.API_URL

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));


//http://localhost:3000/api/v1/products
app.get(`${api}/products`, (req, res) =>{
    const products={
        id: 1,
        name: "teste",
        image: "asd",
    }
    res.send(products)
})
app.post(`${api}/products`, (req, res) =>{
    const newProducts = req.body
    console.log(newProducts)
    res.send(newProducts)
})
mongoose.connect(process.env.DB).then(()=>{
    console.log("database is ready")
}).catch((err)=>{
    console.log(err)
})
app.listen(3000, ()=>{
    console.log("server is running http://localhost:3000")
})