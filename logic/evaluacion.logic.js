var data = require ('../data/evaluacion.data');
var respuestaData = require ('../data/respuesta.data');
var candidatoData = require ('../data/candidato.data');

class EvaluacionLogic {
    constructor(){

    }

    crearEvaluacion(idCandidato, tiempoLimite, descripcion) {
        return new Promise(async (resolve,reject)=>{
            var candidato = await candidatoData.selectCandidato(idCandidato);
            if(candidato.rows.length == 0){
                reject({codigoError: 404, mensaje: "El candidato no existe"});
                return;
            }
            var estadoPendiente = 3
            var result = await data.insertEvaluacion(estadoPendiente, idCandidato, tiempoLimite, descripcion);
            resolve(result.rows[0].id)
        })
    }

    iniciarEvaluacion(idEvaluacion) {
        return new Promise(async (resolve,reject)=>{
            var evaluacion = await data.selectEvaluacion(idEvaluacion);
            if(evaluacion.rows.length == 0)
            {
                reject({codigoError: 404, mensaje: "La evaluación no existe"});
                return;
            }
            var estadoIniciado = 1;
            var fechaInicial = new Date();
            await data.updateEvaluacion(idEvaluacion,estadoIniciado,0,0,fechaInicial);
            resolve(idEvaluacion)
        })
    }

    finalizarEvaluacion(idEvaluacion){
        return new Promise(async (resolve,reject)=>{
            var evaluacion = await data.selectEvaluacion(idEvaluacion);
            if(evaluacion.rows.length == 0)
            {
                reject({codigoError: 404, mensaje: "La evaluación no existe"});
                return;
            }
            var estadoFinalEvaluacion = 2;
            var respuestasResult = await respuestaData.selectRespuestasEvaluacion(idEvaluacion);
            var respuestasExitosas = respuestasResult.rows.some(r => r.es_correcta) ? respuestasResult.rows.filter(r => r.es_correcta).length : 0;
            var calificacion = (respuestasExitosas/respuestasResult.rows.length)*100;
            var evaluacionesResult = await data.selectEvaluacion(idEvaluacion);
            var nivel = evaluacionesResult.rows[0].ultimo_nivel;
            var fechaInicio = evaluacionesResult.rows[0].fecha_inicio;
            await data.updateEvaluacion(idEvaluacion,estadoFinalEvaluacion,calificacion,nivel, fechaInicio);
            var result = await data.selectEvaluacion(idEvaluacion);
            resolve(result.rows[0])
        })
    }

    obtenerEvaluaciones(idCandidato){
        return new Promise(async (resolve,reject)=>{
            var result = await data.selectEvaluaciones(idCandidato);
            if(result.rows.length == 0)
            {
                reject({codigoError: 404, mensaje: "El candidato no tiene evaluaciones"});
                return;
            }
            resolve(result.rows)
        })
    }

}

const user = new EvaluacionLogic()

module.exports = user