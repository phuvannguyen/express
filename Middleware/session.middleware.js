var shortid = require('shortid');
var Session = require('../Model/session.model')

module.exports = async function(req, res, next) {
	var sessionId = req.signedCookies.sessionId;
	if (!sessionId) {
		var sessionCookies = shortid.generate();
		res.cookie('sessionId', sessionCookies, {
		signed: true
	})
	}
	await Session.create({sessionId: sessionCookies}, function(err, results) {
		var count = 0;
		
		if (results.cart.length == 0) {
			return count = 0;
		} else {
			for (var i = 0; i < results.cart.length; i++) {
				count += results.cart.count
			}
			return count
		};


		res.locals.cart = count;
	});

	

	next();
}