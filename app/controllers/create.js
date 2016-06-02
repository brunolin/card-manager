var Mongoose = require('mongoose');

var db = Mongoose.connection;
var password = 'brunolin';

module.exports = function(){

	var controller = {};

	controller.upload = function(req, res){
		var Card = Mongoose.model('Card');
		var up = new Card(
			{
				name: req.body.name,
				price: req.body.price,
				date: req.body.date,
				urlImage: req.files.file.path.slice(7)
			}
		);
		up.save(function(err, resp) {
		  if (err) res.status(500).send({err: err});
			res.status(200).send();
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
				res.send({status: true, msg: 'All data cleared'});
			});
		} else {
			res.send({status: false, msg: 'Wrong password'});
		}

	}
	return controller;
}
