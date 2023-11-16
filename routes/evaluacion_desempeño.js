const { error } = require('console');
var logica = require ('../logic/evaluacion_desempeño.logic')

var express = require('express');

var router = express.Router();


router.post('/', async function(req, res) {
  try {
    const { id_contrato, descripcion } = req.body
    var result = await logica.crear(id_contrato, descripcion);
    res.status(201).json({id: result.id});
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


