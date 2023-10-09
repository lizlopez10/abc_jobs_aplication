var db = require ("../db/db.js")

class RespuestaData{
    constructor()
    {
    }

    selectRespuestasPregunta(idPregunta){
        return new Promise((resolve)=>{
            db.query('SELECT * FROM evaluacion.respuesta WHERE idpregunta= $1', [idPregunta], (error, result) =>{
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
            db.query('SELECT r.* FROM evaluacion.respuesta r join evaluacion.preguntarespondida pr on pr.idrespuesta = r.id  WHERE pr.idevaluacion= $1', [idEvaluacion], (error, result) =>{
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