var express = require('express');
var productControllers = require("../controllers/product.controller");

var router = express.Router();

router.get('/', productControllers.index);
router.get('/:id', productControllers.getOne)
router.post('/', productControllers.post);
router.put('/:id', productControllers.put);
router.patch('/:id', productControllers.patch);
router.delete('/:id', productControllers.delete);

module.exports = router;