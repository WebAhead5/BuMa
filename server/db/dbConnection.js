const pgp = require('pg-promise')();

require('dotenv').config()

const herokuDB = {
  host: 'ec2-54-217-204-34.eu-west-1.compute.amazonaws.com',
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

const localDB = {
  host: 'localhost',
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

const connection = process.env.NODE_ENV === 'test' ? localDB : herokuDB;

const db = pgp(connection);
module.exports = db;