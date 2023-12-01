const express = require('express')
const router = express.Router()

const products = require('../models/products_model')

router.get('/', (req,res)=>{
    const data = {products: products}
    res.render('index.ejs', data)
})

router.get('/:id', (req,res)=>{
    // res.send(products[req.params.id])
    const data = {product: products[req.params.id]}
    res.render('show.ejs',data)
})

module.exports = router