const express = require('express')
const router = express.Router()

const products = require('../models/products_model')

router.get('/', (req,res)=>{
    const data = {products: products}
    res.render('index.ejs', data)
})

router.get('/:id', (req,res, next)=>{
    // res.send(products[req.params.id])
    if(products[req.params.id] == undefined){
        next()
    }
    const data = {product: products[req.params.id]}
    res.render('show.ejs',data)
}, (req, res)=>{
    const data = {error: req.error}
    res.status(404).render('404.ejs', data)
})

module.exports = router