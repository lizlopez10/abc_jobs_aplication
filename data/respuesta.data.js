var db = require ("../db/db.js")

class RespuestaData{
    constructor()
    {
    }

    selectRespuestasPregunta(idPregunta){
        return new Promise((resolve)=>{
            db.query('SELECT * FROM evaluacion.respuesta WHERE id_pregunta= $1', [idPregunta], (error, result) =>{
                if(error){
                    reject(error)
                    return
                }
                resolve(result)
            })
        })
    }

    selectRespuestasEvaluacion(idEvaluacion){
        return new Promise((resolve)=>{
            db.query('SELECT r.* FROM evaluacion.respuesta r join evaluacion.pregunta_respondida pr on pr.id_respuesta = r.id  WHERE pr.id_evaluacion= $1', [idEvaluacion], (error, result) =>{
                if(error){
                    reject(error)
                    return
                }
                resolve(result)
            })
        })
    }
}

const respuesta = new RespuestaData()
module.exports = respuesta