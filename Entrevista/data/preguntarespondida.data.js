var db = require ("../db/db.js")

class PreguntaRespondidaData{
    constructor()
    {
    }

    insertPreguntaRespondida(idPregunta, idEvaluacion, idRespuesta) {
        return new Promise((resolve,reject) => {
            db.query('INSERT INTO evaluacion.preguntarespondida (idpregunta, idevaluacion, idrespuesta) VALUES ($1, $2, $3) RETURNING *', [idPregunta, idEvaluacion, idRespuesta], (error, result)=>{
                if(error){
                    reject(error)
                    return
                }
                resolve(result)
            })
        })   
    }

    selectPreguntaRespondidaEvaluacion(idEvaluacion){
        return new Promise((resolve)=>{
            db.query('SELECT * FROM evaluacion.preguntarespondida WHERE idevaluacion = $1', [idEvaluacion], (error, result) =>{
                if(error){
                    reject(error)
                    return
                }
                resolve(result)
            })
        })
    }
}

const preguntaRespondida = new PreguntaRespondidaData()
module.exports = preguntaRespondida