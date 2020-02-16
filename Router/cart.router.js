var express = require('express');
// . nghĩa là cùng thư mực, .. là ra khỏi thư mục Router=>truy cập vào file đó
var router = express.Router();
var cartControllers = require("../controllers/cart.controller");


router.get('/add/:productId', cartControllers.get);

// router.put('/add/:productId', cartControllers.put)

module.exports = router;