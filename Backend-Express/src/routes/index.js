const express = require('express');
const router = express.Router();

const mainController = require('../controllers/MainController');
const productController = require('../controllers/ProductController');

router.get('/', mainController.index);

router.get('/homeStore', mainController.homeStore);

router.get('/cervejas', mainController.cervejas);

router.get('/listAcessories', mainController.listAcessories);

router.get('/kits', mainController.kits);

router.get('/login', mainController.login);

router.get('/product', mainController.product);


router.get('/checkout', mainController.checkout);

router.get('/search', mainController.search);

router.get('/shoppingCart',mainController.shoppingCart);

router.get('/signUp',mainController.signUp);



//Product
router.get('/product', productController.showAll);

router.get('/product/:id', productController.showById);

router.post('/product', productController.create);

router.put('/product/:id', productController.update);

router.delete('/product/:id', productController.delete);

router.get('/erro', mainController.erro )

module.exports = router;
