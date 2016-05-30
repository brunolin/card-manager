var controller = require('../controllers/create.js')();

module.exports = function(app) {
	app.post('/r/upload', controller.upload);
	app.post('/r/search', controller.search);
};
