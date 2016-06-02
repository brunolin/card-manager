var controller = require('../controllers/create.js')();
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty({uploadDir: './public/img/'});

module.exports = function(app) {
	app.post('/r/upload', multipartyMiddleware, controller.upload);
	app.post('/r/search', controller.search);
	app.post('/r/clear-all', controller.clearAll);
};
