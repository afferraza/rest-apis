var express = require('express');
var middleware = require('../middleware')
var router = express.Router();
var controller = require("../controller")

router.get('/', controller.status);

router.get('/status', middleware.json,controller.status);

module.exports = router;