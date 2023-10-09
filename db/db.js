const Pool = require ('pg') .Pool

const pool = new Pool({
    user: process.env.USER_DB, // postgres
    host: process.env.HOST_DB, // localhost
    database: process.env.NAME_DB,// postgres
    password: process.env.PASSWORD_DB,// admin
    port: process.env.PORT_DB// 5432
  })

//  const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: 'admin',
//   port: 5432
// }) 
 
module.exports = pool