var fortune = require('fortune');
var express = fortune.express;

var app = fortune({
		db: 'burgercount'
	})
	.resource('category', {
		name: String,
		products: ['product']
	})
	.resource('product', {
		name: String,
		calories: Number,
		category: 'category'
	})
	.use(express.static('app'))
	.use(express.compress())
	.use(express.errorHandler())
	.listen(80);
