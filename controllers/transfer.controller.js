// /var/ var Product = require("../Model/product.model")
var shortid = require('shortid')
var db = require('../db')

module.exports.index = async function(req, res, next) {
	res.render('transfer/index', {csrfToken: req.csrfToken()});		
};
module.exports.post = async function(req, res, next) {
	var data = {
		id: shortid.generate(),
		acount: req.body.acount,
		amount: parseInt(req.body.amount),
		userId: req.signedCookies.userId
	}
		
	db.get('transfer').push(data).write();
	res.redirect('/transfer/create')
	
}