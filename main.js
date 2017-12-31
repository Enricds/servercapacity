

// Mòdul on tenim la funció per llegirun fitxer i passar-lo a un array
var llegirfitxer = require('./llegircsv.js');
var calculs = require('./calcul.js');

var fs = require('fs');
var dir = '/Users/enricdelgadosamper/Development/CapacityPlanning/servercapacity/servers';


//llegeix els fitxers del directori i els converteix en un array

fs.readdir(dir, function(err, items) {
    for (var i=0; i<items.length; i++) {

          var inputFile=dir+'/'+items[i];

          var dadesserver = [];
          var pics = [];
          var area = [];

          llegirfitxer(inputFile, function (dadesserver) {
            console.log(JSON.stringify(dadesserver));
            calculs(dadesserver, pics, area);
            console.log(JSON.stringify(pics));
            console.log(JSON.stringify(area));
          });
    }

});
