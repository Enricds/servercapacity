

var llegirfitxer = require('./llegircsv.js');

var inputFile='server1.csv';
var dadesserver = [];

function espic (dada, Maxim){
  if (dada/Maxim>.9) return (true);
  else return (false);
}

function calculpic() {

  llegirfitxer(inputFile, function (dadesserver) {

    Maxim = dadesserver[0][0];
    Total = 0;

    for (i=1; i<dadesserver.length; i++) {
      if (espic(dadesserver[i][1],Maxim)) Total++;
    }

    console.log(JSON.stringify(Total));

  });

}

calculpic();
