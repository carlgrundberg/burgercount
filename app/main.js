App = Ember.Application.create();

//Models
App.Category = DS.Model.extend({
	name: DS.attr('string'),
	products: DS.hasMany('product')
});

App.Product = DS.Model.extend({
	name: DS.attr('string'),
	calories:  DS.attr('number'),
	category: DS.belongsTo('category')
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('category');
	}
});