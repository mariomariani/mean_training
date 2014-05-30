'use strict';

module.exports = function(app) {

    // Home route
    var index = require('../controllers/index');

    app.route('/')
        .get(index.render);
	app.route('/save_event')
        .post(index.save_event);

};
