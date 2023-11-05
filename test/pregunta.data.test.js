jest.mock("../db/db");
const data = require('../data/pregunta.data');
// const data = require('../db/usuario.model');


describe('select pregunta', () =>{
    it('debería seleccionar un pregunta correctamente', async ()=>{
        let nivel = 1
        let result = null;
        let error = null;
        try {
            result = await data.selectPreguntasNivel(nivel);    
        } catch (e) {
            error = e
        }
        
        expect(result).not.toBeNull();
        expect(error).toBeNull();
    });

    it('no debería seleccionar un pregunta correctamente', async ()=>{
        let nivel = 1
        let result = null;
        let error = null;
        try {
            result = await data.selectPreguntasNivel();    
        } catch (e) {
            error = e
        }
        
        expect(error).not.toBeNull();
        expect(result).toBeNull();
    });
});