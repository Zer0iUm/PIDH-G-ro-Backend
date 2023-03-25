const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')


//Product
router.get('/product', ProductController.showAll)

router.get('/product/:id', ProductController.showById)

router.post('/product', ProductController.create)

router.put('/product/:id', ProductController.update)

router.delete('/product/:id', ProductController.delete)

module.exports = router