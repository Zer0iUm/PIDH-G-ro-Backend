const products = require('../database/products.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const MainController = {
	index: (req, res) => {
		res.render('index', { products });
		toThousand;
	},
	store: (req, res) => {
		res.render('homeStore', { products });
		toThousand;
	},
	cervejas: (req, res) => {
		res.render('listBeer', { products });
		toThousand;
	},
	acessories: (req, res) => {
		res.render('listAcessories', { products });
		toThousand;
	},
	kits: (req, res) => {
		res.render('listKits', { products });
		toThousand;
	},
	login: (req, res) => {
		res.render('login', { products });
		toThousand;
	},
	product: (req, res) => {
		res.render('product', { products });
		toThousand;
	},

	checkout: (req, res) => {
		res.render('checkout', {});
	},
};

<<<<<<< HEAD
module.exports = MainController;
=======
    loja:(req, res) =>{
        res.render('homeStore', {products})
    },
    
    acessorios:(req, res) =>{
        res.render('listAcessories', {products})
    },

}

module.exports = MainController
>>>>>>> 7a41b73a64edb1f30fe4ca98d75f0d02102ae9ba
