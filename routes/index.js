var express = require('express');
var router = express.Router();
var info = require("./info");

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(info);
	res.render('index', {
		title: info.title,
    image: info.images[0]
	});
});

router.get('/top-10-node-tips', function(req, res, next) {
	res.render('top-10-node-tips', {
		title: "First Tips",
    image: info.images[1],
		content: info.firstTips,
		back: "top-10-node-tips/3",
		next: "top-10-node-tips/2"
	});
});

router.get('/top-10-node-tips/2', function(req, res, next) {
	res.render('top-10-node-tips', {
		title: "Next Tips",
    image: info.images[2],
		content: info.nextTips,
		back: "/",
		next: "/top-10-node-tips/3"
	});
});

router.get('/top-10-node-tips/3', function(req, res, next) {
	res.render('top-10-node-tips', {
		title: "Last Tips",
		content: info.nextTips,
    image: info.images[3],
		back: "/top-10-node-tips/2"
	});
});

module.exports = router;
