var controller = require('../controllers/create.js')();

module.exports = function(app) {
	app.post('/r/email', controller.sendMail);
};
