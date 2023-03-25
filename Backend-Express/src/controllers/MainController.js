const products = require('../database/products.json')

const MainController = {
    index: (req, res) =>{
        res.render('index', { products })
    }
}
module.exports = MainController