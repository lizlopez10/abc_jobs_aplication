var data = require ('../data/evaluacion.data')
var respuestaData = require ('../data/respuesta.data')
class EvaluacionLogic {
    constructor(){

    }

    iniciarEvaluacion(idCandidato) {
        return new Promise(async (resolve,reject)=>{
            var estadoInicialEvaluacion = 1
            var result = await data.insertEvaluacion(estadoInicialEvaluacion, idCandidato);
            resolve(result.rows[0].id)
        })
    }

    finalizarEvaluacion(idEvaluacion){
        return new Promise(async (resolve,reject)=>{
            var estadoFinalEvaluacion = 2
            var respuestasResult = await respuestaData.selectRespuestasEvaluacion(idEvaluacion);
            var respuestasExitosas = respuestasResult.rows.filter(r => r.escorrecta).length;
            var calificacion = (respuestasExitosas/respuestasResult.rows.length)*100;
            var evaluacionesResult = await data.selectEvaluacion(idEvaluacion);
            var nivel = evaluacionesResult.rows[0].ultimonivel;
            data.updateEvaluacion(idEvaluacion,estadoFinalEvaluacion,calificacion,nivel);
            var result = await data.selectEvaluacion(idEvaluacion);
            resolve(result.rows[0])
        })
    }

}

const user = new EvaluacionLogic()

module.exports = user