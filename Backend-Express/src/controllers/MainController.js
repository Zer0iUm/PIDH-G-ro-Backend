const products = require('../database/products.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const MainController = {
	index: (req, res) => {
		res.render('index', { products });
		toThousand;
	},

	homeStore:(req, res) =>{
        res.render('homeStore', {products})
        toThousand;
    },
	
	cervejas: (req, res) => {
		res.render('listBeer', { products });
		toThousand;
	},
	listAcessories: (req, res) => {
		res.render('listAcessories', { products });
		
	},
	
    kits: (req, res) => {
		res.render('listKits', { products });

	},
	login: (req, res) => {
		res.render('login', {});
		toThousand;
	},
	product: (req, res) => {
		res.render('product', { products });
		toThousand;
	},

	checkout: (req, res) => {
		res.render('checkout', {});
	},

    search:(req, res) => {
		res.render('search', {products});
	},

    shoppingCart:(req, res) => {
		res.render('shoppingCart', {products});
	},

    signUp:(req, res) => {
		res.render('signUp', {});
	},

}



module.exports = MainController;

