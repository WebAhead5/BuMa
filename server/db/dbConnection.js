const pgp = require('pg-promise')();

const herokuDB = {
  host: process.env.HEROKU_HOST,
  user: process.env.HEROKU_USER,
  password: process.env.HEROKU_PW,
  database: process.env.HEROKU_DB,
  ssl: true,
};

const localDB = {
  host: 'localhost',
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

const connection = process.env.NODE_ENV === 'production' ? herokuDB : localDB;

const db = pgp(connection);
module.exports = db;