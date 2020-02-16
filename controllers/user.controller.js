var Users = require('../Model/user.model');


module.exports.index = async function(req, res) {
	var users = await Users.find()
	res.render('users/index', {user:users})
};

module.exports.search = async function(req, res) {	
	var q = req.query.name
	var a  = (await Users.find({})).filter(function(result) {
		return result.name.toLowerCase().indexOf(q.toLowerCase()) !== -1

	});
	res.render('users/index', {user:a})
};

module.exports.create = async function(req, res) {
	res.render('users/create')
};

module.exports.auId =  async function(req, res) {
	var id = req.params.id;
	var users =  await Users.findOne({_id: id});
	
	res.render('users/view', {user: users})

};

module.exports.postCreate = async function(req, res) {     
    var shortLink = req.file.path.split("").slice(7).join("");
    req.body.file = shortLink.replace("\\", "/");
	await Users.create(req.body)
	res.redirect('/user')	
}