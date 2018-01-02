
//Hi deu haver una manera d'exportar-ho tot de cop... suposo
/*
exports.module = NoFerRes;
exports.module = Indeterminat;
exports.module = RevisarPicsAplicacio;
exports.module = RevisarConsumServidor;
exports.module = PicsAmuntOk;
exports.module = AreaAmuntOk;*/

module.exports = {NoFerRes, Indeterminat, RevisarPicsAplicacio, RevisarConsumServidor, PicsAmunt, AreaAmunt}


  function NoFerRes(nomservidor) {
    const Text = 'No fer res, tot ok'
    console.log(nomservidor+': '+Text);
    // Altres accions
  }

  function Indeterminat(nomservidor) {
    const Text = 'Situació poc clara, revisar dades'
    console.log(Text);
    // Altres accions
  }

  function RevisarPicsAplicacio(nomservidor) {
    const Text = 'Aplicacació amb pics excesssius. Revisar aplicacio'
    console.log(nomservidor+': '+Text);
    // Altres accions
  }

   function RevisarConsumServidor(nomservidor) {
    const Text = 'Servidor amb consum excesssius. Cal incrementar recursos'
    console.log(nomservidor+': '+Text);
    // Altres accions
  }

  function PicsAmunt(nomservidor) {
    const Text = 'Els pics estan augmentant, compte'
    console.log(nomservidor+': '+Text);
    // Altres accions
  }

  function AreaAmunt(nomservidor) {
    const Text = 'S està incrementatnt l ús de recursos, compte'
    console.log(nomservidor+': '+Text);
    // Altres accions
  }
