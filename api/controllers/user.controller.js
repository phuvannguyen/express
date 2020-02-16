var User = require("../../Model/user.model");


module.exports.index = async function(req, res) {
	var users = await User.find()
	res.json(users)	
};

module.exports.post = async function(req, res) {
	var user = await User.create(req.body);
	res.json(user)
	
}