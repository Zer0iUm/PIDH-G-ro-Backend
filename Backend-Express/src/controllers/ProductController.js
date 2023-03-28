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
			res.render('product', { req, product });
		else return res.status(400).json({ error: 'Produto não encontrado.' });
	},
	// Create product
	
	create(req, res) {
		console.log(req.files)
		
		products.push(req.body);
		res.json(products);
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
			return res.status(400).json({ error: 'Produto não encontrado.' });
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
