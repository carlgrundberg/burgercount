var inflect = require('i')();
var fortune = require('fortune');
var express = fortune.express;

var app = fortune({
	db: 'burgercount',
	namespace: '/api'
});

// Transform single resource json to arrays to follow http://jsonapi.org/, should be done client side
app.use(function (req, res, next) {
	if(req.body) {
		for(var k in req.body) {
			if(req.body.hasOwnProperty(k) && !(req.body[k] instanceof Array)) {
				req.body[inflect.pluralize(k)] = [ req.body[k] ];
				delete req.body[k];
			}
		}
	}
	next();
});

var models = require('./shared/models');
for(var i in models) {
	app.resource(i.toLowerCase(), models[i]);
}

app.use('/shared', express.static('shared'));
app.use(express.static('app'));
app.use(express.compress());


app.use(express.errorHandler());
app.listen(80);
