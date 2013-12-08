if (typeof module !== 'undefined' && module.exports) {
	exports = module.exports = {
		name: String,
		products: ['product']
	};
} else {
	var Category = {
		name: DS.attr('string'),
		products: DS.hasMany('product')
	};
}
