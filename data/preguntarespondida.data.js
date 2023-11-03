var db = require ("../db/db.js")

class PreguntaRespondidaData{
    constructor()
    {
    }

    insertPreguntaRespondida(idPregunta, idEvaluacion, idRespuesta) {
        return new Promise((resolve,reject) => {
            db.query('INSERT INTO evaluacion.pregunta_respondida (id_pregunta, id_evaluacion, id_respuesta) VALUES ($1, $2, $3) RETURNING *', [idPregunta, idEvaluacion, idRespuesta], (error, result)=>{
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
            db.query('SELECT * FROM evaluacion.pregunta_respondida WHERE id_evaluacion = $1', [idEvaluacion], (error, result) =>{
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