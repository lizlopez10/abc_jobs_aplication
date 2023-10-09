const { error } = require('console');
var logica = require ('../logic/evaluacion.logic')

var express = require('express');

var router = express.Router();


/* POST Iniciar evaluacion*/
router.post('/iniciar/:idCandidato', async function(req, res) {
  const { idCandidato } = req.params
  var result = await logica.iniciarEvaluacion(idCandidato);
  res.status(201).send('id evaluacion: ' + result)
});

/* POST terminar entrevista*/
router.post('/finalizar/:idEvaluacion', async function(req, res) {
    const { idEvaluacion } = req.params
  
    var result = await logica.finalizarEvaluacion(idEvaluacion);
    res.status(200).send(result)
  });

module.exports = router;


