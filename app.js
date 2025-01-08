const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose');
require("dotenv/config")

app.use(cors)
app.use('*', cors())

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

//Router
const categoriesRoutes = require('./routers/categories');
const productsRoutes = require('./routers/products');
const usersRoutes = require('./routers/users');
const ordersRoutes = require('./routers/orders');

const api = process.env.API_URL

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

//Database
mongoose.connect(process.env.DB).then(()=>{
    console.log("database is ready")
}).catch((err)=>{
    console.log(err)
})

//Server
app.listen(3000, ()=>{
    console.log("server is running http://localhost:3000")
})