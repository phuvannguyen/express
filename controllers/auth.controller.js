var Users = require('../Model/user.model');
var md5 = require('md5');


module.exports.login = async function(req, res) {
	res.render('auth/login')
};

module.exports.post = async function(req, res, next) {	
	var email = req.body.email;
	var passWord = md5(req.body.password);
	var user = await Users.findOne({email: email})
	
	// var user = db.get('users')
 //  .find({ email })
 //  .value();	

	if (!user) {
		res.render('auth/login', {
			errors: ['User does not exist.']		
			
		});	
		
	};

	var pass = await Users.findOne({password: passWord})

	if (!passWord) {
		res.render('auth/login', {
			errors: ['Pass was wrong.'
			]
		});
	};
	res.cookie('userId', user.id, {
		signed: true
	});

	res.redirect("/user");
	
};


 



