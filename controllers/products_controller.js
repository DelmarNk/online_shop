const express = require('express')
const router = express.Router()

const products = require('../models/products_model')

router.use(express.urlencoded({extended: false}))

router.get('/', (req,res)=>{
    const data = {products: products}
    res.render('index.ejs', data)
})


router.get('/new', (req,res)=>{
    res.render('new.ejs')
})


router.post('/', (req,res)=>{
    products.push(req.body)
    console.log(req.body)
    res.redirect('/products')

})
router.get('/:id', (req,res, next)=>{
    // res.send(products[req.params.id])
    if(products[req.params.id] == undefined){
        next()
    }
    const data = {product: products[req.params.id], id: req.params.id}
    res.render('show.ejs',data)
}, (req, res)=>{
    const data = {error: req.error}
    res.status(404).render('404.ejs', data)
})

router.get('/:id/edti', (req,res)=>{
    const data = {product: products[req.params.id], id: req.params.id}
    res.render('edit.ejs', data)
})
router.delete('/:id', (req, res)=>{
    products.splice(req.params.id, 1)
    res.redirect('/products')
})

module.exports = router