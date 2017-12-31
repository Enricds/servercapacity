
module.exports=determinaaccio;

var accio = [
  '0: No fer res',
  '1: Revisar dades',
  '2: Afegir recursos'
]

/* Això es podria fer directament en l'anàlisi de la situació però ho separo per si algun servidor cau en
més d'una situación i es vol fer una determinació d'accio més complexa */

var relacions = [
  [0,2],  // S0 -> A2
  [1,2],  // S1 -> A2
  [2,0],  // S2 -> A0
]

function determinaaccio(s) {
  var ok=false;
  for (var i=0; i<relacions.length; i++)
    if (s[relacions[i][0]]) {
      console.log(accio[relacions[i][1]]);
      ok=true;
     }
  if (!ok) console.log(accio[1]); // Si cap sitaució encaixa, revisar dades
}
