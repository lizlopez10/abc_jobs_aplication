var db = require ("../db/db.js")

class PreguntaData{
    constructor()
    {
    }

    selectPreguntasNivel(nivel){
        return new Promise((resolve)=>{
            db.query('SELECT * FROM evaluacion.pregunta WHERE nivel= $1', [nivel], (error, result) =>{
                if(error){
                    reject(error)
                    return
                }
                resolve(result)
            })
        })
    }
}

const pregunta = new PreguntaData()
module.exports = pregunta