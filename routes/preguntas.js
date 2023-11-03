var logica = require ('../logic/pregunta.logic')

var express = require('express');

var router = express.Router();

/* GET solicitar pregunta */
router.get('/solicitar/:idEvaluacion', async function(req, res) {
    try {
        const { idEvaluacion } = req.params
        var result = await logica.obtenerPregunta(idEvaluacion)
        res.status(200).send(result);    
    } catch (error) {
        if(error.codigoError)
        {
            res.status(error.codigoError).send(JSON.stringify(error));
            return;
        }
        res.status(500).send(error);
    }
    
});

/* POST responder pregunta */
router.post('/responder', async function(req, res) {
    try {
        const { idEvaluacion, idPregunta, idRespuesta } = req.body
        await logica.responderPregunta(idEvaluacion,idPregunta, idRespuesta);
        res.status(200).send("Respuesta enviada");    
    } catch (error) {
        if(error.codigoError)
        {
            res.status(error.codigoError).send(JSON.stringify(error));
            return;
        }
        res.status(500).send(error);
    }
    
});

module.exports = router;


