var Product = require("../Model/product.model")

module.exports.index = async function(req, res) {
	var products = await Product.find();
	var numberProduct = products.length - 1; 
	var page = parseInt(req.query.page) || 1;
	var perPage = 8;
	var currentPage = page;
	var totalPage = Math.ceil(numberProduct / perPage);

	var start = perPage* (page - 1);
	var end = perPage*page;

	var product= products.slice(start, end);
	var panigation = function(currentPage, totalPage) {		
		if (currentPage == 1 || currentPage == 2 || currentPage == 3) {
			return [1, 2, 3, 4, "Next"]
		} else if (currentPage == totalPage || currentPage == totalPage - 1 ) {
			return ["Previous", totalPage - 3, totalPage - 2, totalPage - 1, totalPage]
		} else {
			return ["Previous",currentPage -1,  currentPage, currentPage + 1, "Next"]
		}
	};	
	
	res.render('product/index', 
		{panigations: panigation(currentPage, totalPage), products: product});		
	};