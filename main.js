


var llegirfitxer = require('./llegircsv.js');

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(req.url)
  res.end();
});

var inputFile='server1.csv';
var dadesserver = [];


llegirfitxer(inputFile, function (dadesserver) {
  console.log(JSON.stringify(dadesserver));
});

server.listen(8090);
