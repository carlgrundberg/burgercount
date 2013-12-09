var model = {
	name: String,
	products: ['product']
};

if (typeof module !== 'undefined' && module.exports) {
	module.exports = model;
} else {
	window.models = { category: model };
}
