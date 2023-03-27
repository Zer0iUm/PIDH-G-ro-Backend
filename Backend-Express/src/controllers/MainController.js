const products = require('../database/products.json');
const users = require('../database/users.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const checkLogin = (req, res) => {
	req.session.isLogged;
};
const MainController = {
	index: (req, res) => {
		res.render('index', { req, products });
		toThousand;
	},
	requireLogin: (req, res, next) => {
		if (!req.session.isLogged) {
			res.redirect('/login');
		} else {
			next();
		}
	},

	store: (req, res) => {
		res.render('homeStore', { req, products });
		toThousand;
	},
	cervejas: (req, res) => {
		res.render('listBeer', { req, products });
		toThousand;
	},
	acessories: (req, res) => {
		res.render('listAcessories', { req, products });
		toThousand;
	},
	kits: (req, res) => {
		res.render('listKits', { req, products });
		toThousand;
	},
	login: (req, res) => {
		res.render('login', { req, users });
		toThousand;
	},
	product: (req, res) => {
		res.render('product', { req, products });
		toThousand;
	},

	checkout: (req, res) => {
		res.render('checkout', {});
	},
};

loja: (req, res) => {
	res.render('homeStore', { products });
},
	(module.exports = MainController);
