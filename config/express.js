var express = require('express');
//var home = require('../app/routes/home.js');
var contatos = require('../app/routes/create.js');
var bodyParser = require('body-parser');

module.exports = function(){
	var app = express();

	app.set('port', 3000);
	app.use(express.static('./public'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
	  extended: true
	}));
	//home(app);
	contatos(app);
	return app;
}

