var fs = require('fs');

exports.welcome = function (request, response) {

    console.log('Rozpoczynam obsluge zadania "welcome"');

    fs.readFile('./index.html', 'utf-8', (err, html) => {

        if (err) throw err; // PRZYDATNE !!! KONKRETNIEJ WSKAZUJE BŁĘDY

        response.writeHead(200, 'Zapytanie powiodlo sie.', { 'Content-Type': 'text/html; charset=utf-8' });
        response.write(html); // przesyłamy odczytany plik html
        response.end();
    });

}


exports.styles_start = function(request, response){
    
        fs.readFile('./styles.css', 'utf-8', (error, css) => {
    
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(css);
            response.end();
        })
    }


exports.error = function (request, response) {

    console.log('Nie wiem co robic');
    response.write('Error 404');
    response.end();
}

