var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hahahoho');
});

router.get('/aaa', function(req, res, next) {
  res.send('lalala');
});

module.exports = router;
