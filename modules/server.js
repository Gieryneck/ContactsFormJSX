
var http = require('http');
var colors = require('colors'); 
var handlers = require('./handlers');

function start() {

    function onRequest(request, response) {

        console.log('Odebrano zapytanie.'.green);

        console.log('Zapytanie ' + request.url + ' odebrane.'); 

        response.writeHead(200, 'Yo dawg, this is an optional status message, you feel me?', {'Content-Type': 'text/plain'});
    
        switch(true) {
            
            case /^\/(start)?$/.test(request.url):
                handlers.welcome(request, response); 
                break;
            
            case /^\/styles\/start\.css$/.test(request.url):
                handlers.styles_start(request, response);
                break;

            default:
                handlers.error(request, response);
        }
    }

    http.createServer(onRequest).listen(8080); // tutaj nie dajemy parametrow, samo 'onRequest'

    

    console.log('Uruchomiono serwer!'.green);
}

exports.start = start; // dodajemy do obiektu metodę export.start i przypisujemy jej fcję start