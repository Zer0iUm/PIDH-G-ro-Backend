const express = require('express');
const router = express.Router();
const multer = require('multer'); // FUNCIONALIDADES DO MULTER
const path = require('path'); // MANIPULAR PASTAS

// -------------------------------------------- MULTER ---------------------------- //
const multerDiskStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        /* const folder = path.join(__dirname, './public/img') // COMBINA SEGMENTOS DE CAMINHO
        callback(null, folder); */
        callback(null, 'public/img')
    },
    filename: (req, file, callback)=>{
        const imageName = Date.now() + file.originalname;
        callback(null, imageName);
       // callback(null, Date.now() + "-" + file.originalname)
    },
});

const upload = multer({ storage: multerDiskStorage}); 

// --------------------------------------------------------------------------------- //

const mainController = require('../controllers/MainController');
const productController = require('../controllers/ProductController');
const userController = require('../controllers/LoginController');




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

//Product
router.get('/product', productController.showAll);

router.get('/product/:id', productController.showById);

//router.post('/product', productController.create); 

router.put('/product/:id', productController.update);

router.delete('/product/:id', productController.delete);

router.get('/erro', mainController.erro);

// ROTA PARA SUBIR A IMAGEM DO CADASTRO DE PRODUTOS -------------------------------- //

/* router.get('/register', (req, res) => {
    res.render(register);
}); */
router.post('/product', upload.any(), productController.createEJS); // Executa o método upload - middleware
// router.put('/product/:id', upload.any(), productController.update);

// --------------------------------------------------------------------------------- //

module.exports = router;
