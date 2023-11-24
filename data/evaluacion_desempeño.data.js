var db = require ("../db/db.js")

class EvaluacionDesempenoData{
    constructor()
    {
    }

    insert(idContrato, descripcion) {
        return new Promise((resolve,reject) => {
            db.query('INSERT INTO evaluacion.evaluacion_desempeno (id_contrato, descripcion) VALUES ($1, $2) RETURNING *', [idContrato, descripcion], (error, result)=>{
                if(error){
                    reject(error)
                    return
                }
                resolve(result)
            })
        })   
    }

    selectByIdContrato(idContrato){
        return new Promise((resolve,reject) => {
            db.query('select * from evaluacion.evaluacion_desempeno where id_contrato = $1 ', [idContrato], (error, result)=>{
                if(error){
                    reject(error)
                    return
                }
                resolve(result)
            })
        })
    }
}

const evaluacionDesempeno = new EvaluacionDesempenoData()
module.exports = evaluacionDesempeno