const products = require('../database/products.json');

const ProductController = {
	showAll(req, res) {
		res.json(products);
	},
	showById(req, res) {
		const { id } = req.params;

		const product = products.find(product => String(product.id) === id);

		if (product)
			// return res.json(product)
			res.render('product', { req, product, products });
		else return res.status(400).json({ error: 'Produto não encontrado.1' });
	},
	// Create product

	create(req, res) {
		products.push(req.body);
		res.json(products);
	},

	createEJS(req, res) {
		//--------------multer-------------
		console.log(req.body);
		let image = '';
		if (req.files[0] !== undefined) {
			image = req.files[0].filename;
		}

		let newProduct = {
			id: Number(products[products.length - 1].id) + 1,
			...req.body,
			image: image,
		};

		products.push(newProduct);
		res.redirect('http://localhost:3000/homeStore');
	},

	update(req, res) {
		const { id } = req.params;

		const productIndex = products.findIndex(
			product => String(product.id) === id
		);

		if (productIndex != -1) {
			products[productIndex] = req.body;
			return res.json(products);
		} else
			return res.status(400).json({ error: 'Produto não encontrado.2' });
	},
	delete(req, res) {
		const { id } = req.params;

		const productIndex = products.findIndex(
			product => String(product.id) === id
		);

		if (productIndex != -1) {
			products.splice(productIndex, 1);
			return res.json(products);
		} else
			return res.status(400).json({ error: 'Produto não encontrado.3' });
	},

	updateFormEJS: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id);
		res.render('productUpdate', { productToEdit });
	},

	updateEJS: (req, res) => {
		const { id } = req.params;
		let image = '';

		const productIndex = products.findIndex(
			product => String(product.id) === id
		); // índice
		let productToEdit = products.find(product => product.id == id); // objeto

		if (productIndex != -1) {
			if (req.files[0] !== undefined) {
				image = req.files[0].filename;
			} else {
				image = productToEdit.image;
			}

			productToEdit = {
				id: productToEdit.id,
				...req.body,
				image: image,
			};
			console.log(productToEdit);

			products[productIndex] = productToEdit; // atualiza

			res.redirect('http://localhost:3000/homeStore');
		} else
			return res.status(400).json({ error: 'Produto não encontrado.' });
	},

	deleteEJS: (req, res) => {
		const { id } = req.params;

		const productIndex = products.findIndex(
			product => String(product.id) === id
		);

		if (productIndex != -1) {
			products.splice(productIndex, 1);
			res.redirect('http://localhost:3000/homeStore');
		} else
			return res.status(400).json({ error: 'Produto não encontrado.' });
	},
};

// MULTER
/* module.exports = {
	viewCadastro: (req, res) => {
		return res.render("index");
	},
	salvarCadastro: (req, res) => {
		if (!req.file){
			return res.send("Você deve enviar uma imagem!");
		}
		
		return res.send('Deu certo!');
	}
}; */

module.exports = ProductController;
