var express = require('express');
var router = express.Router();
var us_states = require('../us_state.js');
const searchController = require('../controllers/searchController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Find My Election', states: us_states });
});

/* POST search page. */
router.post('/search', searchController.getUpcomingElections);

module.exports = router;
