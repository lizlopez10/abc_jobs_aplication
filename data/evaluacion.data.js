var db = require ("../db/db.js")

class EvaluacionData{
    constructor()
    {
    }

    updateEvaluacion(idEvaluacion, idEstadoEvaluacion, calificacion, ultimoNivel, fechaInicio) {
        return new Promise((resolve,reject)=>{
            db.query('UPDATE evaluacion.evaluacion SET id_estado_evaluacion = $2 , calificacion = $3 , ultimo_nivel = $4, fecha_inicio = $5 WHERE id = $1',[idEvaluacion, idEstadoEvaluacion, calificacion, ultimoNivel, fechaInicio], (error, result) =>{
                if(error){
                    reject(error)
                    return
                }
                resolve(result)
            })
        })
        
    }

    insertEvaluacion(idEstadoEvaluacion, idCandidato, tiempoLimite, descripcion) {
        return new Promise((resolve,reject) => {
            db.query('INSERT INTO evaluacion.evaluacion (id_estado_evaluacion, id_candidato, tiempo_limite, descripcion) VALUES ($1, $2, $3, $4) RETURNING *', [idEstadoEvaluacion, idCandidato, tiempoLimite, descripcion], (error, result)=>{
                if(error){
                    reject(error)
                    return
                }
                resolve(result)
            })
        })
        
    }

    selectEvaluacion(idEvaluacion){
        return new Promise((resolve,reject)=>{
            db.query('SELECT * FROM evaluacion.evaluacion WHERE id = $1', [idEvaluacion], (error, result) =>{
                if(error){
                    reject(error)
                    return
                }
                resolve(result)
            })
        })
    }

    selectEvaluaciones(idCandidato){
        return new Promise((resolve,reject)=>{
            db.query('SELECT e.id, e.descripcion as nombre_evaluacion, ee.descripcion as estado, e.calificacion FROM evaluacion.evaluacion e INNER JOIN evaluacion.estado_evaluacion ee on e.id_estado_evaluacion = ee.id WHERE e.id_candidato = $1;', [idCandidato], (error, result) =>{
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