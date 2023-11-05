jest.mock("../db/db");
const data = require('../data/candidato.data');
// const data = require('../db/usuario.model');


describe('select candidato', () =>{
    it('debería seleccionar un candidato correctamente', async ()=>{
        let idCandidato = 1
        let result = null;
        let error = null;
        try {
            result = await data.selectCandidato(idCandidato);    
        } catch (e) {
            error = e
        }
        
        expect(result).not.toBeNull();
        expect(error).toBeNull();
    });

    it('no debería seleccionar un candidato correctamente', async ()=>{
        let idCandidato = 1
        let result = null;
        let error = null;
        try {
            result = await data.selectCandidato();    
        } catch (e) {
            error = e
        }
        
        expect(error).not.toBeNull();
        expect(result).toBeNull();
    });
});