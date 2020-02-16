module.exports.postCreate = function(req, res, next) {
	var error = [];
    if (!req.body.name) {
    	error.push('Name is required')
    };

    if (!req.body.phone) {
    	error.push('Phone is required')   	
    	
    };

    if (error.length) {
    	res.render('users/create', {errors: error});
    	return
    	
    };
    next();
}
