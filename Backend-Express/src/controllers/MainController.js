const products = require('../database/products.json');
const users = require('../database/users.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const requireLogin = (req, res, next) => {
	if (!req.session.isLogged) {
		res.redirect('login');
	} else {
		next();
	}
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
		let productsToSearch = products.filter(
			product => product.type == 'Cerveja'
		);

		res.render('listBeer', { req, products: productsToSearch });
	},

	listAcessories: (req, res) => {
		let productsToSearch = products.filter(
			product => product.type == 'Acessorios'
		);

		res.render('listAcessories', { req, products: productsToSearch });
	},

	kits: (req, res) => {
		let productsToSearch = products.filter(
			product => product.type == 'Kits'
		);

		res.render('listKits', { req, products: productsToSearch });

		/* let productsToSearch = products.filter(product =>
			product.type == 'Kits'
		);
		//res.render('listKits', { req, products });
		res.render('listKits', { req, products: productsToSearch }) */
	},
	login: (req, res) => {
		// const errorMessage = req.session.errorMessage;
		// req.session.errorMessage = null;
		res.render('login', { req });
		toThousand;
	},
	logout: (req, res) => {
		req.session.destroy();
		res.redirect('homeStore');
		toThousand;
	},
	accountUser: (req, res) => {
		const id = req.session.id;
		res.render('accountUser', { req, id });
		toThousand;
	},
	accountAdmin: (req, res) => {
		res.render('accountAdmin', { req });
		toThousand;
	},
	productRegistration: (req, res) => {
		res.render('productRegistration', { req });
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

	search: (req, res) => {
		let search = req.query.keywords;
		let productsToSearch = products.filter(product =>
			product.name.toLowerCase().includes(search.toLowerCase())
		);
		res.render('search', {
			req,
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
