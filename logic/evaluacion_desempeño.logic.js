const evaluacionDesempeno = require("../data/evaluacion_desempeño.data")

class EvaluacionDesempeñoLogic{

    constructor(){

    }

    crear(idContrato, descripcion){
        return new Promise(async (resolve,reject)=>{
            try {
                let evaluacion = await evaluacionDesempeno.insert(idContrato, descripcion);
                resolve(evaluacion.rows[0]);    
            } catch (error) {
                console.log(error);
                reject(error);
            }
            
        })
    }

}

const evaluacion = new EvaluacionDesempeñoLogic()

module.exports = evaluacion