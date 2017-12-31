
module.exports=analisisituacions;

/* determinem totes les situacions que apliquen a un servidor, per si n'hi ha més d'una */

var situacio=
[   //es un array de funcions

function situacio0 (pics,area) {  // S0: Si 2 o 3 dels intervals té %pics>40%
    var Total=0;
    for (var i=0; i<3; i++) if (pics[i]>0.4) Total++;
    return (Total>1);
},

function situacio1 (pics,area) { // S1: Si 2 o 3 dels intervals té %area > 70%
    var Total=0;
    for (var i=0; i<3; i++) if (area[i]>0.7) Total++;
    return (Total>1);
},

function situacio2 (pics,area) { // S2: si els 3 intervals tenen %pics = 0 i %area < 70%
    var Total1=0;
    for (var i=0; i<3; i++) if (pics[i]==0) Total1++;

    var Total2=0;
    for (var i=0; i<3; i++) if (area[i]<0.7) Total2++;

    return (Total1==3 && Total2==3);
}
]

function analisisituacions(pics, area, s) {
  for (var i=0; i<situacio.length; i++) s[i]=situacio[i](pics, area);
}
