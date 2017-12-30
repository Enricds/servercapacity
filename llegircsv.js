// Mòdul per llegir les dades d un fitxer

module.exports = llegirfitxer;

//Modul per llegir d'un fitxer csv

var fs = require('fs');
var parse = require('csv-parse');

/* Passa les dades del fitxer a un Array on:
    ArrayDdaes[i][0]=coordenada x del punt i
    ArrayDdaes[i][1]=coordenada y del punt i
*/
function llegirfitxer(fitxerin, callback) {

var parser = parse({delimiter: ','}, function (err, data) {

    var ArrayDades = [];
    data.forEach(function(line) {
        var t = [parseInt(line[0]),parseInt(line[1])];
        ArrayDades.push(t);
  //   console.log(JSON.stringify(ArrayDades));
    });
    callback(ArrayDades);
});
// read the inputFile, feed the contents to the parser
fs.createReadStream(fitxerin).pipe(parser);
}

// test. descomentar si cal.
/*
var inputFile='/Users/enricdelgadosamper/Development/CapacityPlanning/servercapacity/servers/server1.csv';
var dadaesserver = [];

llegirfitxer(inputFile, function (dadaesserver) {
  console.log(JSON.stringify(dadaesserver));
});
*/
