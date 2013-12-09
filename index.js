var fortune = require('fortune');
var express = fortune.express;

var app = fortune({
	db: 'burgercount'
});

var models = require('./app/models');
for(var i in models) {
	app.resource(i.toLowerCase(), models[i]);
}

app.use(express.static('app'));
app.use(express.compress());
app.use(express.errorHandler());
app.listen(80);
