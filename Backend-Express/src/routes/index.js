const express = require('express');
const router = express.Router();
const multer = require('multer'); // FUNCIONALIDADES DO MULTER
const path = require('path'); // MANIPULAR PASTAS

// -------------------------------------------- MULTER ---------------------------- //
const multerDiskStorage = multer.diskStorage({
	destination: (req, file, callback) => {
		/* const folder = path.join(__dirname, './public/img') // COMBINA SEGMENTOS DE CAMINHO
        callback(null, folder); */
		callback(null, 'public/img');
	},
	filename: (req, file, callback) => {
		const imageName = Date.now() + file.originalname;
		callback(null, imageName);
		// callback(null, Date.now() + "-" + file.originalname)
	},
});

const upload = multer({ storage: multerDiskStorage });

// --------------------------------------------------------------------------------- //

const mainController = require('../controllers/MainController');
const productController = require('../controllers/ProductController');
const userController = require('../controllers/userController');

router.get('/', mainController.index);

router.get('/homeStore', mainController.homeStore);

router.get('/cervejas', mainController.cervejas);

router.get('/listAcessories', mainController.listAcessories);

router.get('/kits', mainController.kits);

router.get('/login', mainController.login);

router.post('/login', userController.userLogin);

router.get('/logout', mainController.logout);

router.get('/accountUser', mainController.accountUser);

router.get('/accountAdmin', mainController.accountAdmin);

router.get('/productRegistration', mainController.productRegistration);

router.get('/product', mainController.product);

router.get('/checkout', mainController.checkout);

router.get('/search', mainController.search);

router.get('/shoppingCart', mainController.shoppingCart);

router.get('/signUp', mainController.signUp);

router.post('/signUp', userController.register);

//Product
router.get('/product', productController.showAll);

router.get('/product/:id', productController.showById);

//router.put('/product/:id', productController.update);

//router.delete('/product/:id', productController.delete);

router.get('/erro', mainController.erro);

// # Product

// GET - EJS Create Form - View
//router.get('/product/create', productController.createFormEJS)

// GET - EJS Update Form - View
router.get('/product/update/:id', productController.updateFormEJS);

// POST - EJS Create
router.post('/product', upload.any(), productController.createEJS);

// PUT - EJS Update
router.put('/product/:id', upload.any(), productController.updateEJS);

// DELETE - EJS Delete
router.delete('/product/:id', productController.deleteEJS);

module.exports = router;
