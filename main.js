

// Mòdul on tenim la funció per llegirun fitxer i passar-lo a un array
var llegirfitxer = require('./llegircsv.js');

var fs = require('fs');
var dir = '/Users/enricdelgadosamper/Development/CapacityPlanning/servercapacity/servers';


//llegeix els fitxers del directori i els converteix en un array

fs.readdir(dir, function(err, items) {
    for (var i=0; i<items.length; i++) {

          var dadesserver = [];
          var inputFile=dir+'/'+items[i];

          llegirfitxer(inputFile, function (dadesserver) {
            console.log(JSON.stringify(dadesserver));
          });
    }

});
