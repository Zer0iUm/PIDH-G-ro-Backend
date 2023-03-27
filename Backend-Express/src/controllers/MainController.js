const products = require('../database/products.json');
const users = require('../database/users.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const checkLogin = (req, res) => {
	req.session.isLogged;
};
const MainController = {
	index: (req, res) => {
		res.render('index', { products });
		toThousand;
	},

	homeStore: (req, res) => {
		res.render('homeStore', { req, products });
		toThousand;
	},

	cervejas: (req, res) => {
		res.render('listBeer', { req, products });
		toThousand;
	},

	listAcessories: (req, res) => {
		res.render('listAcessories', { req, products });
	},

	kits: (req, res) => {
		res.render('listKits', { req, products });
	},
	login: (req, res) => {
		res.render('login', { req });
		toThousand;
	},
	logout: (req, res) => {
		req.session.destroy();
		res.redirect('homeStore');
		toThousand;
	},
	accountUser: (req, res) => {
		res.render('accountUser', { req });
		toThousand;
	},
	product: (req, res) => {
		res.render('product', { req, products });
		toThousand;
	},

	checkout: (req, res) => {
		res.render('checkout', { req });
	},

	shoppingCart: (req, res) => {
		res.render('shoppingCart', { req, products });
	},

	signUp: (req, res) => {
		res.render('signUp', { req });
	},
	pesquisa: (req, res) => {
		let pesquisa = req.query.keywords;
		let produdutosParaPesquisa = products.filter(product =>
			product.name.toLowerCase().includes(pesquisa)
		);
		res.render('search', {
			products: productsToSearch,
			search,
			toThousand,
		});
	},
	erro: (req, res) => {
		res.render('404', { req });
	},
};

module.exports = MainController;
