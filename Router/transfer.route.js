var express = require('express');
// . nghĩa là cùng thư mực, .. là ra khỏi thư mục Router=>truy cập vào file đó
var router = express.Router();
var transferControllers = require("../controllers/transfer.controller");


router.get('/create', transferControllers.index);
router.post('/create', transferControllers.post)


module.exports = router;