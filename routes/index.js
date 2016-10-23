var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//routes/index.js
/* GET map page. */
router.get('/map', function(req, res) {
    res.render('map', {
        title: 'OL_Map',
        lat: 0,
        lng: 0
    });
});

module.exports = router;
