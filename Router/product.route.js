var express = require('express');
var productControllers = require("../controllers/product.controller");

var router = express.Router();

router.get('/', productControllers.index);
module.exports = router;