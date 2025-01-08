const Product = require('../models/product')
const express = require('express')
const router = express.Router()

//http://localhost:3000/api/v1/products
router.get(`/`, (req, res) =>{
    const products={
        id: 1,
        name: "teste",
        image: "asd",
    }
    res.send(products)
})

router.post(`/`, (req, res) =>{
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        count: req.body.count,
    })
    product.save().then((createdProduct => {
        res.status(201).json(createdProduct)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
    
})
module.exports = router