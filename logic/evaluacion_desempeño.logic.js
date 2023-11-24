const evaluacionDesempeno = require("../data/evaluacion_desempeño.data")

class EvaluacionDesempeñoLogic{

    constructor(){

    }

    crear(idContrato, descripcion){
        return new Promise(async (resolve,reject)=>{
            try {
                const evaluacionExistente = await evaluacionDesempeno.selectByIdContrato(idContrato);
                if(evaluacionExistente.rows.length !== 0){
                    reject({codigoError: 419, mensaje: "El contrato ya tiene una evaluación de desempeño"});
                    return;
                }
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