var Users = require('../Model/user.model')

module.exports.cookie = function(req, res, next) {
	var cookie = req.signedCookies.userId;
	var user = Users.find({"id": cookie});
	
	if (!cookie) {
		res.redirect("/auth/login");
		return;
	};

	if (!user) {
		res.redirect("/auth/login");
		return;
	
	};
	res.locals.user= user


	next();
}