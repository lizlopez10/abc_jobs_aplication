var db = require ("../db/db.js")

class CandidatoData{
    constructor()
    {
    }

    selectCandidato(idCandidato){
        return new Promise((resolve)=>{
            db.query('SELECT * FROM candidato.candidato WHERE id= $1', [idCandidato], (error, result) =>{
                if(error){
                    reject(error)
                    return
                }
                resolve(result)
            })
        })
    }
}

const candidato = new CandidatoData()
module.exports = candidato