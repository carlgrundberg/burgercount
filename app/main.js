App = Ember.Application.create();

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

App.IndexRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('category');
	}
});
