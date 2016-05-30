var Mongoose = require('mongoose');

var db = Mongoose.connection;

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

		consulta.find(function(err, resp) {
		  if (err) res.send('Erro na busca' + err);
		  res.send(resp);
		});


	}
	return controller;
}
