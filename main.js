


var llegirfitxer = require('./llegircsv.js');

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
});

var inputFile='server1.csv';
var dadaesserver = [];


llegirfitxer(inputFile, function (dadaesserver) {
  console.log(JSON.stringify(dadaesserver));
});

server.listen(8090);
