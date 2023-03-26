const products = require('../database/products.json')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const MainController = {
    index: (req, res) =>{
        res.render('index', { products })
        toThousand
    },
    cervejas: (req, res) =>{
        res.render('listBeer', { products })
        toThousand
    },

    checkout:(req, res) =>{
        res.render('checkout', {})
    },

    loja:(req, res) =>{
        res.render('homeStore', {products})
    },
    
    acessorios:(req, res) =>{
        res.render('listAcessories', {products})
    },

}

module.exports = MainController