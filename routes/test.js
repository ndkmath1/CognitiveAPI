var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    // res.send(res.get("access_token"));
    res.render('test', { title: 'Express' });
});

module.exports = router;