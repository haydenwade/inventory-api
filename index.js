var express = require('express');
var bodyParser = require('body-parser'); //used to convert request body into usable json

var app = express()
, cors = require('cors')
, app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/', require('./app'));

// If no route is matched by now, it must be a 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Start the server
app.set('port', process.env.PORT || 3010);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});