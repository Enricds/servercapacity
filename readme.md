
Explicacio de com funciona aquest programet

La idea no es fer una aproximació a una corba de les dades de consum que dona el SRM perquè la majoria de SW que fan això
són de pagament i perquè, fins on m'ha semblat veure, tu has de onar la corba model com a input, el qual no ens serveix en
aquest cas.

Provem doncs una altra manera més senzilla i, espero, més efectiva.

Per cada interval de dades d'un servidor analitzarem 2 coses: pics i consum mig. I ho farem dividint l'interval en 3 parts.
Per què 3? Peruqè 2 em sembla que dona poc joc i 4 es fa massa complicat.

Suposem doncs que les dades ens venen en un array de dues diemsnions, array[x][y] i tenim a més una dada que es la capacitat màxima
de a màquina. Aquesta és una dada molt importnat i que diferencia el que farem amb el mètode de curve-fitting.

1) Dividim l'array en 3 intervals.
2) Per cada interval, calculem
    a) percentatge de pics respecte els punts de l'interval (considerem un pic, un valor que arriba a un 90% del maxim)
    b) percentatge del area definida pels punts de l'interval respecte el Maxim*interval

3) Amb aquestes dades podem definir una serie de Situacions basades en la foto d'un interval i en la comparativa amb els
altres intervals.

4) Per cada Situació cal definir una Acció concreta que podrà ser:

(això es faria molt fàcil amb el ilog però... val pasta)

Accions:
A1: no fer res
A2: Situació poc clara: revisar les dades
A3: Servidor al limit: cal afegir recursos o moure aplicacions a un altre servidor

Situacions:
S1: Si 2 o 3 dels intervals té %pics > 40% -> A3
S2: Si 2 o 3 dels intervals té %area > 70% -> A3
S3: si els 3 intervals tenen %pics = 0 i %area < 70% -> A1
S4: si pics interval 1< pics interval 2< pics interval 3 -> A3
S4: si area interval 1< area interval 2< area interval 3 i area interval 3> 60% -> A3
etc, etc
resta de Situacions -> A2
