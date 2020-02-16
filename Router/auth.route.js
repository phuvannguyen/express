var express = require('express');
// . nghĩa là cùng thư mực, .. là ra khỏi thư mục Router=>truy cập vào file đó
var router = express.Router();
var userControllers = require("../controllers/auth.controller");


router.get('/login', userControllers.login);
router.post('/login', userControllers.post)

module.exports = router;