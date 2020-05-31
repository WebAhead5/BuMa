const db = require('../../db/dbConnection');



const getCustomers = () => db.query(`SELECT * FROM customers `);



const getCustomerById = (customerId) => db.query(`SELECT * FROM customers where id = $1`,customerId);




module.exports = {
  getCustomers,
  getCustomerById
  
};

