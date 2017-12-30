


var llegirfitxer = require('./llegircsv.js');

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(req.url);

  fs.readdir(req.url, function(err, items) {
    //console.log(JSON.stringify(items));
    //res.write(JSON.stringify(items));

    for (var i=0; i<items.length; i++) {
              res.write(JSON.stringify(items[i]));
      //  console.log(JSON.stringify(items[i]));
    }
//  res.write('final');
    res.end();
  });

});

var inputFile='server1.csv';
var dadesserver = [];


llegirfitxer(inputFile, function (dadesserver) {
  console.log(JSON.stringify(dadesserver));
});

server.listen(8090);
