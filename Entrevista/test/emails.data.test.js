
const data = require('../data/emails.data.js');
jest.mock('../db/db.js') 
const db = require('../db/db.js');

test('get emails', () => {
    db.query.mockImplementation("", cb => cb('valor'))
    data.getEmails((result)=>{
        expect(result).toBe('valor')
    })
});

test('post email', () => {
    db.query.mockImplementation("", cb => cb('valor'))
    data.postEmail((result)=>{
        expect(result).toBe('valor')
    })
});