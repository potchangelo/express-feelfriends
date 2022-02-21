const knex = require('knex');

const db = knex.default({
  client: 'mysql2',
  connection: {
    user: 'root',
    password: 'password1234',
    host: '127.0.0.1',
    port: 3306,
    database: 'express_fewfriends'
  }
});

console.log('รันรอบเดียวตอน Start app');

module.exports = db;
