const express = require('express')
const router = express.Router()

const mainController = require('../controllers/MainController')
const productController = require('../controllers/ProductController')



router.get('/', mainController.index)


router.get('/cervejas', mainController.cervejas)

//Product
router.get('/product', productController.showAll)

router.get('/product/:id', productController.showById)

router.post('/product', productController.create)

router.put('/product/:id', productController.update)

router.delete('/product/:id', productController.delete)

module.exports = router