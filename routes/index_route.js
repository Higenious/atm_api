var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res) {
  res.status(404).send({ message: 'Router not found.' })
});

module.exports = router;
