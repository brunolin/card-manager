var http = require('http');
var app = require('./config/express.js')();
var Mongoose = require('mongoose');

var db = Mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  console.log('Mongo gg');
  var cardSchema = new Mongoose.Schema({
    name: String,
    price: String,
    date: String,
    urlImage: String
  });

  Mongoose.model('Card', cardSchema);
});

Mongoose.connect('mongodb://localhost/test');

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express Server ' + app.get('port'));
});
