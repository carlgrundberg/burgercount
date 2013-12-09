App = Ember.Application.create();

function toDSAttr(model) {
	var dsModel = {};
	for(i in model) {
		dsModel[i] = DS.attr('string');
	}
	return dsModel;
}

//Models
App.Category = DS.Model.extend(toDSAttr(models['category']));

App.Product = DS.Model.extend({
	name: DS.attr('string'),
	calories: DS.attr('number'),
	category: DS.belongsTo('category')
});

App.IndexRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('category');
	}
});
