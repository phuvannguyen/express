var express = require('express');
var userControllers = require("../controllers/user.controller");

var router = express.Router();

router.get('/', userControllers.index);
router.post('/', userControllers.post)
module.exports = router;