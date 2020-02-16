var express = require('express');
var multer  = require('multer');

// . nghĩa là cùng thư mực, .. là ra khỏi thư mục Router=>truy cập vào file đó

var userControllers = require("../controllers/user.controller");
var validate = require("../validate/user.validate.js");
var upload = multer({ dest: './public/avatar'});
var router = express.Router();

router.get('/', userControllers.index);


router.get('/search', userControllers.search);

router.get("/create", userControllers.create);

router.get("/:id", userControllers.auId)

router.post("/create",
	upload.single('file'),
	validate.postCreate, 
	userControllers.postCreate
	);

module.exports = router;
