var db = require ("../db/db.js")

class EvaluacionData{
    constructor()
    {
    }

    updateEvaluacion(idEvaluacion, idEstadoEvaluacion, calificacion, ultimoNivel) {
        return new Promise((resolve,reject)=>{
            db.query('UPDATE evaluacion.evaluacion SET idestadoevaluacion = $2 , calificacion = $3 , ultimonivel = $4 WHERE id = $1',[idEvaluacion, idEstadoEvaluacion, calificacion, ultimoNivel], (error, result) =>{
                if(error){
                    reject(error)
                    return
                }
                resolve(result)
            })
        })
        
    }

    insertEvaluacion(idEstadoEvaluacion, idCandidato) {
        return new Promise((resolve,reject) => {
            db.query('INSERT INTO evaluacion.evaluacion (idestadoevaluacion, idcandidato) VALUES ($1, $2) RETURNING *', [idEstadoEvaluacion, idCandidato], (error, result)=>{
                if(error){
                    reject(error)
                    return
                }
                resolve(result)
            })
        })
        
    }

    selectEvaluacion(idEvaluacion){
        return new Promise((resolve)=>{
            db.query('SELECT * FROM evaluacion.evaluacion WHERE id = $1', [idEvaluacion], (error, result) =>{
                if(error){
                    reject(error)
                    return
                }
                resolve(result)
            })
        })
    }

}

const evaluacion = new EvaluacionData()
module.exports = evaluacion