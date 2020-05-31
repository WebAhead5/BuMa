const pgp = require('pg-promise')();
require('dotenv').config();

const herokuDB = {
  host: process.env.HEROKU_HOST,
  user: process.env.HEROKU_USER,
  password: process.env.HEROKU_PW,
  database: process.env.HEROKU_DB,
  ssl: true,
};

const testDB = {
  host: 'localhost',
  port: 5432,
  database: process.env.TEST_DB_NAME,
  user: process.env.TEST_DB_USER,
  password: process.env.TEST_DB_PASS
}

const localDB = {
  host: 'localhost',
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

const connection = process.env.NODE_ENV === 'test' ? testDB : localDB;

const db = pgp(connection);
module.exports = db;