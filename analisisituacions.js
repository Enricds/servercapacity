
module.exports=analisisituacions;

var a = require('./determinaaccio.js');

/* determinem totes les situacions que apliquen a un servidor, per si n'hi ha més d'una que aplqui */

const limitarea=0.7; // Quan considerem que el consum mig es massa gran
const limitpics=0.3; // quan considerem que el nombre de pics es massa gran
const picsinferior=0.2 // Quan el nombre de pics es acceptable

// Inici - Funcions Auxiliars

function augmentpics(pics,area) { // S3: augment de pics a cada interval
    return ((pics[0]<pics[1]) && (pics[1]<pics[2]));
}

function augmentarea (pics,area) { // S3: augment d arees a cada interval
    return ((area[0]<area[1]) && (area[1]<area[2]));
}

function picsok (pics, area) {
  return ((pics[0]<picsinferior) && (pics[1]<picsinferior) && (pics[2]<picsinferior));
}

function areaok (pics, area) {
  return ((area[0]<limitarea) && (area[1]<limitarea) && (area[2]<limitarea));
}

// Fi - Funcions Auxiliars

var situacio=
[   /* Es un array de funcions per poder repassar-les totes en un loop.
       Cada situacio porta associada una acció definida apart perquè les accions es poden repetir en situacions dieferents
       Pot donar-se més d'una situació. Si només en volem una cal modificar una mca l'estructura */


function picsfatal (pics,area, nomservidor) {  // Si 2 o 3 dels intervals té %pics>limit
    var Total=0;
    for (var i=0; i<3; i++) if (pics[i]>limitpics) Total++;
    if (Total>1)
       a.RevisarPicsAplicacio(nomservidor); // Accio
},

function areafatal (pics,area, nomservidor) { // Si 2 o 3 dels intervals té %area > limit
    var Total=0;
    for (var i=0; i<3; i++) if (area[i]>0.7) Total++;
    if (Total>1)
      a.RevisarConsumServidor(nomservidor);  // Accio
},

function CompteAugmentPics (pics,area, nomservidor) { // Tot ok pero compte que pugen els pics
  if (augmentpics(pics, area))
    a.PicsAmunt(nomservidor); // Accio
},

function CompteAugmentArea(pics,area, nomservidor) { // Tot ok pero compte que pugen els pics
  if (augmentarea(pics, area))
   a.AreaAmunt(nomservidor); // Accio
},

function totok (pics,area, nomservidor) { // Si els 3 intervals tenen %pics = picsinferior i %area < limit
  if (picsok(pics, area) && areaok(pics,area) && !augmentpics(pics, area) && !augmentarea(pics,area))
    a.NoFerRes(nomservidor);
  }
]

/* Repassa totes les situacions */

function analisisituacions(pics, area, nomservidor) {
  for (var i=0; i<situacio.length; i++) {
    console.log(JSON.stringify(i)+':');
    situacio[i](pics, area, nomservidor);
  }
}
