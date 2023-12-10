const express = require('express')
const app = express()
const PORT = 4000
const methodOverride = require('method-override')

app.set('view_engine', 'ejs')
app.use(express.static('public'))
app.use(methodOverride('_method'))

const productsController =require('./controllers/products_controller')

app.use('/products', productsController)


app.get('/*',(req,res)=>{
    const data = {error: req.error}
    res.status(404).render('404.ejs', data)
})


app.listen(PORT,()=>{
    console.log(`Always on ${4000}`)
})