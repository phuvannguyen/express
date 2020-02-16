var Product = require("../../Model/product.model");


module.exports.index = async function(req, res) {
	var products = await Product.find()
	res.json(products)	
};

module.exports.getOne = async function(req, res) {
	var id = req.params.id;
	var onlyOneProduct = await Product.findOne({_id: id});
	res.json(onlyOneProduct)
};

module.exports.post = async function(req, res) {
	var product = await Product.create(req.body);
	res.json(product)
	
};

module.exports.put = async function(req, res) {
	var id = req.params.id;
	var putProduct = await Product.findByIdAndUpdate(id, {$set: { name: 'Diboat.com', description: 'Phu Dep TRai' }})
	res.json(putProduct)
};

module.exports.patch = async function(req, res) {
	var id = req.params.id;
	var patchProduct = await Product.findByIdAndUpdate(id, {$set: { name: 'Diboat.com', description: 'Phu Dep TRai VL' }})
	res.json(patchProduct)

};

module.exports.delete = async function(req, res) {
	var id = req.params.id;
	var deleteProduct = await Product.findOneAndRemove({_id: id});
	res.json(deleteProduct);
}