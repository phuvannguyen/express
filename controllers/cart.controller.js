var Session = require("../Model/session.model");

module.exports.get = async function(req, res, next) {
	var productId = req.params.productId;
	var sessionId = req.signedCookies.sessionId;
	
	if (!sessionId) {
		res.redirect("./product");
		return
	};

	var newItem = await Session.findOne({sessionId: sessionId});
	var cart = newItem.cart;	

	if (cart.length == 0) {
		console.log({productId: productId, count: 1})
		cart.push({productId: productId, count: 1})		
	} else {		
		for(var i = 0; i < cart.length; i++) {
			if (cart[i].productId === productId) {
				cart[i].count += 1;				
								
			};

			if (cart[i].productId !== productId && i == (cart.length - 1)) {
				cart.push({productId: productId, count: 1});
				
			}				
			
		}
	}	
	await Session.findOneAndUpdate({sessionId: sessionId},{ $set: {cart: cart}}, {new: true});

	res.redirect('/product');

};


