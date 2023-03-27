const products = require('../database/products.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const MainController = {
	index: (req, res) => {
		res.render('index', { products });
		toThousand;
	},

	homeStore:(req, res) =>{
        res.render('homeStore', { products })
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

    shoppingCart:(req, res) => {
		res.render('shoppingCart', {products});
	},

    signUp:(req, res) => {
		res.render('signUp', {});
	},
	pesquisa:(req, res) => {
		let pesquisa = req.query.keywords
		let produdutosParaPesquisa = products.filter(product => product.name.toLowerCase().includes(pesquisa))
		res.render('search', {
			products: produdutosParaPesquisa,
			pesquisa,
			toThousand,
		})
	},	
    erro:(req, res) => {
		res.render('404', {});
	},

}

module.exports = MainController;

