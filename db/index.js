const knex = require('knex');

const db = knex.default({
  client: 'mysql2',
  connection: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    timezone: '+00:00'
  }
});

console.log('รันรอบเดียวตอน Start app');

module.exports = db;
