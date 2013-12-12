App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter.extend({
	namespace: 'api',
	bulkCommit: true
});

function toDSAttr(model) {
	var dsModel = {};
	for (var i in model) {
		if(model[i] instanceof Array) {
			dsModel[i] = DS.hasMany(model[i]);
		} else if(typeof model[i] == 'string') {
			dsModel[i] = DS.belongsTo(model[i]);
		} else if(model[i] == Number) {
			dsModel[i] = DS.attr('number');
		} else if(model[i] == String) {
			dsModel[i] = DS.attr('string');
		}
	}
	return dsModel;
}

//Models
for(var i in models) {
	App[i] = DS.Model.extend(toDSAttr(models[i]));
}

App.Router.map(function() {
	this.resource('categories', function() {
		this.resource('category', { path: ':category_id' });
	});
});

App.CategoriesRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('category');
	}
});

App.CategoryRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('category', params.category_id);
	}
});

App.CategoryController = Ember.ObjectController.extend({
	actions: {
		save: function() {
			this.get('model').save();
		}
	}
});