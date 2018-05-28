var request = require ('request');

let url1 = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today'
let url2 = 'http://svatky.adresa.info/json'
let url3 = 'https://www.lectserve.com/today'
let url4 = 'https://api.abalin.net/get/today?country=cz'

//var urls = [ url1, url2, url3, url4 ];
var urls = [ url1 ]
//var countries = [ 'us', 'cz', 'sk', 'pl', 'fr', 'hu', 'hr', 'se', 'at', 'it', 'es' ];

for (var i = 0; i < urls.length; i++) {
    console.log ('calling: ', urls[i]);
    request (urls[i], function (error, response, body) {
        console.log ('error:', error);
        console.log ('body:', body);
        console.log ('\n---\n');
    });
}
