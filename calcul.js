

// Mòdul per calcular àrea i pics

module.exports=calculs;

const LimitPic = 0.9;

function pics (dadesserver, IniciInterval, FiInterval, Maxim){
  var Total = 0;
  for (var i=IniciInterval; i<=FiInterval; i++) {
    if (dadesserver[i][1]/Maxim > LimitPic) Total++;
  }
  return (Total/(FiInterval-IniciInterval+1)); //percentatge de punts en pic en l'interval
}

function area (dadesserver, IniciInterval, FiInterval, Maxim){
  var Total = 0;
  for (var i=IniciInterval; i<=FiInterval-1; i++) {
     Total += dadesserver[i][1]*(dadesserver[i+1][0]-dadesserver[i][0]);
  }
  return (Total/(Maxim*(FiInterval-IniciInterval))); //percentatge de l'area
}

function calculs(dadesserver, picsout, areaout) {

  var MaximaCapacitat = dadesserver[0][0];

  var LlargadaSubIntervals = Math.trunc((dadesserver.length)/3);  //si algun interval s'ha de quedar amb més pnts que sigui el darrer

  var Interval1 = LlargadaSubIntervals; // de dadesserver[1][] fins dadesserver[LlargadaSubIntervals][]
  var Interval2 = 2*LlargadaSubIntervals // de dadesserver[1+Interval1][] fins dadesserver[2*LlargadaSubIntervals][]
  var Interval3 = dadesserver.length-1;  // de dadesserver[1+Interval2][] fins dadesserver[dadesserver.length-1][]

  picsout[0]=pics(dadesserver, 1, Interval1, MaximaCapacitat);
  picsout[1]=pics(dadesserver, Interval1+1, Interval2, MaximaCapacitat);
  picsout[2]=pics(dadesserver, Interval2+1, Interval3, MaximaCapacitat);

  areaout[0]=area(dadesserver, 1, Interval1, MaximaCapacitat);
  areaout[1]=area(dadesserver, Interval1, Interval2, MaximaCapacitat);
  areaout[2]=area(dadesserver, Interval2, Interval3, MaximaCapacitat);

}
