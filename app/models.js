// Shared model definitions between server/client

var models = {
	Category: {
		name: String,
		products: ['product']
	},
	Product: {
		name: String,
		calories: Number,
		category: 'category'
	}
};

if (typeof module !== 'undefined' && module.exports) {
	module.exports = models;
} else {
	window.models = models;
}
