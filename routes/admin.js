const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

const products = [];

router.get('/addProduct', (req, res, next) => {
	//res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));

	// res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
	res.render('add-product', { pageTitle: 'Add Product' });
});

router.post('/addProduct', (req, res, next) => {
	//console.log(req.body);
	products.push({ title: req.body.title });
	res.redirect('/');
});

// module.exports = router;
// module.exports = products;

exports.routes = router;
exports.products = products;
