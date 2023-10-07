const logica = require('../logic/users.logic.js');
jest.mock('../data/emails.data.js')
const data = require('../data/emails.data.js');
const { log } = require('console');

test('get emails with errors', () => {
    data.getEmails.mockImplementation(cb => cb('error'))
    logica.getEmails((error, result)=>{
        expect(error).toBe('error')
        expect(result).toBe(undefined)
    })
});

test('get emails without errors', () => {
    data.getEmails.mockImplementation(cb => cb(null,{rows: "Valor válido"}))
    logica.getEmails((error, result)=>{
        expect(error).toBe(null)
        expect(result).toBe("Valor válido")
    })
});