var evaluacionData = require ('../data/evaluacion.data')
var preguntaData = require ('../data/pregunta.data')
var respuestaData = require ('../data/respuesta.data')
var preguntaRespondidaData = require ('../data/preguntarespondida.data')

class EvaluacionLogic {
    constructor(){

    }

    obtenerPregunta(idEvaluacion) {
        return new Promise(async (resolve,reject)=>{
            try {
                var evaluacionesResult = await evaluacionData.selectEvaluacion(idEvaluacion);
                var nivel = evaluacionesResult.rows[0].ultimonivel;
                nivel++;
                if(nivel == 6){ //Validacion de nivel máximo
                    resolve();
                }
                var preguntasResult = await preguntaData.selectPreguntasNivel(nivel);
                var i = Math.floor(Math.random() * preguntasResult.rows.length);
                var pregunta = preguntasResult.rows[i];
                var respuestasResult = await respuestaData.selectRespuestasPregunta(pregunta.id);
                var respuestas = respuestasResult.rows.map((respuesta) => {
                    return {
                        "idRespuesta": respuesta.id,
                        "respuesta": respuesta.respuesta 
                    }
                })
                resolve({"idPregunta": pregunta.id, "pregunta": pregunta.pregunta,"nivel": nivel, "posiblesRespuestas": respuestas})    
            } catch (error) {
                reject(error);
            }
        })
    }

    responderPregunta(idEvaluacion, idPregunta, idRespuesta) {
        return new Promise(async (resolve,reject)=>{
            try {
                preguntaRespondidaData.insertPreguntaRespondida(idPregunta,idEvaluacion,idRespuesta);
                var respuestasResult = await respuestaData.selectRespuestasPregunta(idPregunta);
                if (respuestasResult.rows.filter(respuesta => respuesta.escorrecta)[0].id == idRespuesta){
                    var evaluacionesResult = await evaluacionData.selectEvaluacion(idEvaluacion);
                    var evaluacion = evaluacionesResult.rows[0];
                    var nivel = evaluacion.ultimonivel
                    nivel++
                    evaluacionData.updateEvaluacion(idEvaluacion, evaluacion.idestadoevaluacion, evaluacion.calificacion, nivel);
                }
                resolve();    
            } catch (error) {
                console.log(error)
                reject(error);
            }
        })
    }

}

const user = new EvaluacionLogic()

module.exports = user