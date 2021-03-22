const us_states = require('../us_state.js');
const fetch = require('node-fetch');
const hbs = require('hbs');
const SearchUpcomingElections = require('../models/SearchUpcomingElections')

hbs.registerHelper('formatDate', function (str) {
    let dateTimeStr = (new Date(str)).toLocaleString('en-GB', { timeZone: 'UTC' })
    date = dateTimeStr.split(',')[0]
    return date; 
});

exports.getUpcomingElections = (req,res) => {
    let state = req.body.state.toLowerCase();
    let place = req.body.city.toLowerCase().replace(/ /g,'_').replace(/\./g, '');
    
    let ocdIdState = `ocd-division/country:us/state:${state}`
    let ocdIdStatePlace = `${ocdIdState}/place:${place}`
    let ocdIdStr = `${ocdIdState},${ocdIdStatePlace}`
  
    const searchModel = new SearchUpcomingElections(state, place, ocdIdStr);
    searchModel.validateUserInput();

    if(searchModel.errors.length > 0){
        res.render('index', { title: 'Find My Election', states: us_states, error: searchModel.errors.toString() })
    }
    
    else{
        fetch(`https://api.turbovote.org/elections/upcoming?district-divisions=${ocdIdStr}`,{
            headers: {'Accept': 'application/json'}
        })
        .then((response)=>response.json())
        .then((responseJSON)=>{
            let upcomingElectionsArr = responseJSON;
            if(upcomingElectionsArr.length > 0){  
                res.render('search', { upcomingElectionsArr: upcomingElectionsArr });
            }
            else if(upcomingElectionsArr.length === 0){
                res.render('index', {title: 'Find My Election', states: us_states, error: 'No upcoming state or municipal elections in your area'});
            }
        })
    }
}