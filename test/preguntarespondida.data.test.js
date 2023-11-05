jest.mock("../db/db");
const data = require('../data/preguntarespondida.data');
// const data = require('../db/usuario.model');


describe('select pregunta respondida', () =>{
    it('debería seleccionar una pregunta respondida correctamente', async ()=>{
        let idevaluacion = 1
        let result = null;
        let error = null;
        try {
            result = await data.selectPreguntaRespondidaEvaluacion(idevaluacion);    
        } catch (e) {
            error = e
        }
        
        expect(result).not.toBeNull();
        expect(error).toBeNull();
    });

    it('no debería seleccionar una pregunta respondida correctamente', async ()=>{
        let result = null;
        let error = null;
        try {
            result = await data.selectPreguntaRespondidaEvaluacion();    
        } catch (e) {
            error = e
        }
        
        expect(error).not.toBeNull();
        expect(result).toBeNull();
    });
});

describe('insert pregunta respondida', () =>{
    it('debería insertar una pregunta respondida correctamente', async ()=>{
        let idEvaluacion= 1
        let idPregunta = 1
        let idRespuesta = 30
        let result = null;
        let error = null;
        try {
            result = await data.insertPreguntaRespondida(idPregunta, idEvaluacion, idRespuesta);    
        } catch (e) {
            error = e
        }
        
        expect(result).not.toBeNull();
        expect(error).toBeNull();
    });

    it('no debería insertar una pregunta respondida correctamente', async ()=>{
        let result = null;
        let error = null;
        try {
            result = await data.insertPreguntaRespondida();    
        } catch (e) {
            error = e
        }
        
        expect(error).not.toBeNull();
        expect(result).toBeNull();
    });
});