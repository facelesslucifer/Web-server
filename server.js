var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(request, response) {
    response.send('About us');
});

app.get('/', function(request, response) {
    response.send('Hello Express!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log('Express server is running on port ' + PORT);
});