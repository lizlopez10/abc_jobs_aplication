var logica = require ('../logic/pregunta.logic')

var express = require('express');

var router = express.Router();

/* GET solicitar pregunta */
router.get('/solicitar/:idEvaluacion', async function(req, res) {

    const { idEvaluacion } = req.params
    var result = await logica.obtenerPregunta(idEvaluacion)
    if(!result){
        res.status(201).send("No hay mas preguntas, finalice la evaluacion");    
    }
    res.status(200).send(result);
});

/* POST responder pregunta */
router.post('/responder', async function(req, res) {
    const { idEvaluacion, idPregunta, idRespuesta } = req.body
    await logica.responderPregunta(idEvaluacion,idPregunta, idRespuesta);
    res.status(200).send("Respuesta enviada");
});

module.exports = router;


