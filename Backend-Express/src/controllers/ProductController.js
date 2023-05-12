
const { validationResult } = require('express-validator')

const products = require('../database/products.json');

const ProductController = {
	showAll(req, res) {
		res.json(products);
	},
	showById: async(req, res) => {
		const id = req.params.id

		try {
			const product = await Product.findOne({
				where: {
					id: id
				},
				include: {
					model: ProductType,
					as: 'productType',
					required: true
				}
			})

			res.render('product', {
				req,
				product
			})
		} catch (error) {
			res.status(400).json({ error })
		}
	},
	
	
	/* (req, res) {
		const { id } = req.params;

		const product = products.find(product => String(product.id) === id);

		if (product)
			// return res.json(product)
			res.render('product', { req, product, products });
		else return res.status(400).json({ error: 'Produto não encontrado.1' });
	}, */
	// Create product

	create(req, res) {
		products.push(req.body);
		res.json(products);
	},

	createFormEJS: (req, res) => {
		res.render('productRegistration')
	  },

	createEJS: async (req, res) => {
		let image = ''
	
		const errors = validationResult(req)
		if (!errors.isEmpty())
			res.render('product-create-form', { errors: errors.mapped() }) // ou array()
		console.log(req.body)

		try {
		  if (req.files[0] !== undefined) {
			image = req.files[0].filename
		  } else {
			image = 'default-image.png'
		  }
		  
		  let newProduct = {
			...req.body,
			image: image
		  }
	
		  await Product.create(newProduct) // cria o registro no banco de dados
	
		  res.redirect('/')
		} catch (error) {
		  res.status(400).json({ error })
		}
	  },
	
	/* (req, res) {
		//--------------multer-------------
		console.log(req.body);
		let image = ''

const errors = validationResult(req) // express-validation
if (!errors.isEmpty())
res.render('productRegistration', {errors: errors.mapped()}) // ou array()

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
	}, */



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

	/* updateFormEJS: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id);
		res.render('productUpdate', { productToEdit });
	}, */

// Update form product - View - professor


  // Update product
updateEJS: async (req, res) => {
    const { id } = req.params
    let image = ''
    
    try {
      const productToEdit = await Product.findByPk(id)
    
      if (productToEdit != undefined) {
          if (req.files[0] !== undefined) {
              image = req.files[0].filename
          } else {
              image = productToEdit.image
          }

          let product = {
            ...req.body,
            image: image
          }

          await Product.update(
            product,
            {
              where: {
                id: id
              }
            }
          ) // atualiza o registro no banco de dados

          res.redirect('/')
      } else return res.status(400).json({ error: 'Produto não encontrado.' })

    } catch (error) {
      res.status(400).json({ error })
    }
  },

  updateFormEJS: async (req, res) => {
    const id = req.params.id

    try {
      const productToEdit = await Product.findByPk(id)

      res.render('productUpdate', { productToEdit })
    } catch (error) {
      res.status(400).json({ error })
    }
  },

	/* updateEJS: (req, res) => {
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
	}, */

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

module.exports = ProductController;
