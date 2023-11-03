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
                var nivel = evaluacionesResult.rows[0].ultimo_nivel;
                nivel++;
                if(nivel == 6){ //Validacion de nivel máximo
                    reject({codigoError: 400, mensaje: "No hay mas preguntas, finalice la evaluacion"});
                    return;
                }
                var preguntasResult = await preguntaData.selectPreguntasNivel(nivel);
                var preguntasRespondidasResult = await preguntaRespondidaData.selectPreguntaRespondidaEvaluacion(idEvaluacion);
                var preguntasRespondidas = preguntasRespondidasResult.rows;
                var preguntas = preguntasResult.rows.map(p=> {
                    if(!preguntasRespondidas.some(pr => pr.id_pregunta == p.id))
                        return p
                });
                preguntas = preguntas.filter(p => p);
                console.log(pregunta);
                if(preguntas.length == 0 ){
                    reject({codigoError: 400, mensaje: "No hay mas preguntas, finalice la evaluacion"});
                    return;
                }
                var i = preguntas.length == 1 ? 0 : Math.floor(Math.random() * preguntas.length);
                var pregunta = preguntas[i];
                var respuestasResult = await respuestaData.selectRespuestasPregunta(pregunta.id);
                var respuestas = respuestasResult.rows.map((respuesta) => {
                    return {
                        "id_respuesta": respuesta.id,
                        "respuesta": respuesta.respuesta 
                    }
                })
                resolve({"id_pregunta": pregunta.id, "pregunta": pregunta.pregunta,"nivel": nivel, "posibles_respuestas": respuestas})    
            } catch (error) {
                reject({codigoError: 500, mensaje: error});
                return;
            }
        })
    }

    responderPregunta(idEvaluacion, idPregunta, idRespuesta) {
        return new Promise(async (resolve,reject)=>{
            try {
                var evaluacionesResult = await evaluacionData.selectEvaluacion(idEvaluacion);
                var fecha = evaluacionesResult.rows[0].fecha_inicio;
                var sumarsesion =evaluacionesResult.rows[0].tiempo_limite;
                var minutes = fecha.getMinutes();
                fecha.setMinutes(minutes + sumarsesion);
                var fechaActual = new Date();
                if(fechaActual>fecha){
                    reject({codigoError: 400, mensaje: "El tiempo de la prueba terminó"});
                    return;
                }
                var respuestasResult = await respuestaData.selectRespuestasPregunta(idPregunta);
                console.log("Respuestas; ", respuestasResult);
                if(!respuestasResult.rows.some(r => r.id == idRespuesta))
                {
                    reject({codigoError: 400, mensaje: "Respuesta no válida"})
                    return;
                }
                preguntaRespondidaData.insertPreguntaRespondida(idPregunta,idEvaluacion,idRespuesta);
                if (respuestasResult.rows.filter(respuesta => respuesta.es_correcta)[0].id == idRespuesta){
                    var evaluacionesResult = await evaluacionData.selectEvaluacion(idEvaluacion);
                    var evaluacion = evaluacionesResult.rows[0];
                    var nivel = evaluacion.ultimo_nivel
                    nivel++
                    evaluacionData.updateEvaluacion(idEvaluacion, evaluacion.id_estado_evaluacion, evaluacion.calificacion, nivel, evaluacion.fecha_inicio);
                }
                resolve();    
            } catch (error) {
                console.log(error)
                reject({codigoError: 500, mensaje: error});
                return;
            }
        })
    }

}

const user = new EvaluacionLogic()

module.exports = user