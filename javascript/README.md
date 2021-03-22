# Upcoming Elections Practical

This is a server-side web application written in JavaScript with
[Express][express] and [Handlebars][handlebars]. This app is modeled using MVC. A search controller and search model were created. 

## User Flow
* A user can search upcoming elections by putting in their address. For this example, only state and city are required, an error message will appear if state and city are not entered. 
* Upon pressing the search button, the user is brought to a new page showing a table of upcoming elections. If no upcoming elections exist, they will stay on the original form submission page and be notified that no upcoming elections exist. 

## Setup

    npm install

## Running

    DEBUG=js-upcoming-elections:* npm start

## Testing

    npm test

[express]: https://expressjs.com/
[handlebars]: http://handlebarsjs.com/

## Future Improvements
* formatting date/time to the polling site local time.
    - as of now date/time is formatted to the local time of whoever is making the search
* perhaps moving the fetch call to the search model, to keep all data handling in the same place. 
