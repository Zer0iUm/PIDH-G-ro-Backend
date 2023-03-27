const express = require('express');
const MainController = require('../controllers/MainController');
const router = express.Router();

const mainController = require('../controllers/MainController');
const productController = require('../controllers/ProductController');
const userController = require('../controllers/LoginController');

router.get('/', mainController.index);

router.get('/store', mainController.store);

router.get('/cervejas', mainController.cervejas);

router.get('/acessories', mainController.acessories);

router.get('/kits', mainController.kits);

router.get('/login', mainController.login);

router.post('/login', userController.userLogin);

router.get('/product', mainController.product);

//Product
router.get('/product', productController.showAll);

router.get('/product/:id', productController.showById);

router.post('/product', productController.create);

router.put('/product/:id', productController.update);

router.delete('/product/:id', productController.delete);

router.get('/checkout', mainController.checkout);

module.exports = router;
