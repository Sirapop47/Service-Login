var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var httpPort = process.env.httpPort || 3000;

var app = express();

var loginService = require('./service');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

loginService(app);

if (require.main === module) {
  app.listen(httpPort, function() {
    console.log('service listening on port %d', this.address().port);
  });
}
