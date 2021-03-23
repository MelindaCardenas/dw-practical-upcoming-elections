const { getOcdId } = require ('../controllers/searchController');
var tap = require('tap');

tap.equal(getOcdId("TN","Red Boiling Springs"), 
    "ocd-division/country:us/state:tn,ocd-division/country:us/state:tn/place:red_boiling_springs"
);