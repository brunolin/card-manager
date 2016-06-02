var Mongoose = require('mongoose');

var db = Mongoose.connection;
var password = 'brunodoyoutube';

module.exports = function(){

	var controller = {};

	controller.upload = function(req, res){
		var Card = Mongoose.model('Card');

		//console.log(req.body);
		res.send(req.body);

		var up = new Card(
			{
				name: req.body.card.name,
				price: req.body.card.price,
				date: req.body.card.date,
				urlImage: req.body.file.$ngfBlobUrl
			}
		);

		up.save(function(err, thor) {
		  if (err) return console.error('DEU RUIM');
		});
	};

	controller.search = function(req, res){
		var consulta = Mongoose.model('Card');

		consulta.find(req.body, function(err, resp) {
		  if (err) res.send('Erro na busca' + err);
		  res.send(resp);
		});
	};

	controller.clearAll = function(req, res){
		if (req.body.password === password){
			Mongoose.model('Card').remove({}, function(err, resp) {
				console.log(resp);
				res.send(true);
			});
		} else {
			res.send(false);
		}

	}
	return controller;
}
