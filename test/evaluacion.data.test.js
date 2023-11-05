jest.mock("../db/db");
const data = require('../data/evaluacion.data');
// const data = require('../db/usuario.model');


describe('select evaluacion', () =>{
    it('debería seleccionar un evaluacion correctamente', async ()=>{
        let idevaluacion = 1
        let result = null;
        let error = null;
        try {
            result = await data.selectEvaluacion(idevaluacion);    
        } catch (e) {
            error = e
        }
        
        expect(result).not.toBeNull();
        expect(error).toBeNull();
    });

    it('no debería seleccionar un evaluacion correctamente', async ()=>{
        let result = null;
        let error = null;
        try {
            result = await data.selectEvaluacion();    
        } catch (e) {
            error = e
        }
        
        expect(error).not.toBeNull();
        expect(result).toBeNull();
    });
});

describe('select evaluaciones', () =>{
    it('debería seleccionar evaluaciones correctamente', async ()=>{
        let idCandidato = 1
        let result = null;
        let error = null;
        try {
            result = await data.selectEvaluaciones(idCandidato);    
        } catch (e) {
            error = e
        }
        
        expect(result).not.toBeNull();
        expect(error).toBeNull();
    });

    it('no debería seleccionar evaluaciones correctamente', async ()=>{
        let idCandidato = 1
        let result = null;
        let error = null;
        try {
            result = await data.selectEvaluaciones();    
        } catch (e) {
            error = e
        }
        
        expect(error).not.toBeNull();
        expect(result).toBeNull();
    });
});

describe('insert evaluacion', () =>{
    it('debería insertar una evaluacion correctamente', async ()=>{
        let idEstadoEvaluacion= 1
        let idCandidato = 1
        let tiempoLimite = 30
        let descripcion = ""
        let result = null;
        let error = null;
        try {
            result = await data.insertEvaluacion(idEstadoEvaluacion, idCandidato, tiempoLimite, descripcion);    
        } catch (e) {
            error = e
        }
        
        expect(result).not.toBeNull();
        expect(error).toBeNull();
    });

    it('no debería insertar una evaluacion correctamente', async ()=>{
        let result = null;
        let error = null;
        try {
            result = await data.insertEvaluacion();    
        } catch (e) {
            error = e
        }
        
        expect(error).not.toBeNull();
        expect(result).toBeNull();
    });
});

describe('update evaluacion', () =>{
    it('debería actualizar una evaluacion correctamente', async ()=>{
        let idevaluacion = 1
        let idEstadoEvaluacion= 1
        let calificacion = 50 
        let ultimoNivel = 2
        let fechaInicio = "2021-10-01"
        let result = null;
        let error = null;
        try {
            result = await data.updateEvaluacion(idevaluacion, idEstadoEvaluacion, calificacion, ultimoNivel, fechaInicio);    
        } catch (e) {
            error = e
        }
        
        expect(result).not.toBeNull();
        expect(error).toBeNull();
    });

    it('no debería actualizar una evaluacion correctamente', async ()=>{
        let result = null;
        let error = null;
        try {
            result = await data.updateEvaluacion();    
        } catch (e) {
            error = e
        }
        
        expect(error).not.toBeNull();
        expect(result).toBeNull();
    });
});