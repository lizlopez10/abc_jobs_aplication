const { error } = require('console');
var logica = require ('../logic/evaluacion.logic')

var express = require('express');

var router = express.Router();


/* POST Iniciar evaluacion*/
router.post('/iniciar/:idCandidato', async function(req, res) {
  try {
    const { idCandidato } = req.params
    var result = await logica.iniciarEvaluacion(idCandidato);
    res.status(201).json({id_evaluacion: result})  
  } catch (error) {
    if(error.codigoError)
    {
      res.status(error.codigoError).send(JSON.stringify(error));
      return;
    }
    res.status(500).send(error);
  }
  
});

/* POST terminar entrevista*/
router.post('/finalizar/:idEvaluacion', async function(req, res) {
  try {
    const { idEvaluacion } = req.params
  
    var result = await logica.finalizarEvaluacion(idEvaluacion);
    res.status(200).json(result)
  } catch (error) {
    if(error.codigoError)
    {
      res.status(error.codigoError).json(error);
      return;
    }
    res.status(500).send(error);
  }
});

router.get('/obtener/:idCandidato', async function(req, res) {
  try {
    const { idCandidato } = req.params
    var result = await logica.obtenerEvaluaciones(idCandidato);
    res.status(200).json(result)  
  } catch (error) {
    if(error.codigoError)
    {
      res.status(error.codigoError).json(error);
      return;
    }
    res.status(500).json(error);
  }
});

router.post('/crear', async function(req, res) {
  try {
    const { id_candidato, tiempo_limite, descripcion } = req.body
    var result = await logica.crearEvaluacion(id_candidato, tiempo_limite, descripcion);
    res.status(201).json({id_evaluacion: result});
  } catch (error) {
    if(error.codigoError)
    {
      res.status(error.codigoError).json(error);
      return;
    }
    res.status(500).json(error);
  }
});


module.exports = router;


