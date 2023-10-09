var db = require ("../db/db.js")

class EmailsData{
    constructor()
    {
    }

    getEmails(callback) {
        db.query('SELECT * FROM emails ORDER BY id ASC', callback)
    }

    postEmail(inputs, callback) {
        db.query('INSERT INTO emails (id, email) VALUES ($1, $2) RETURNING *', inputs, callback)
    }

}

const emails = new EmailsData()
module.exports = emails