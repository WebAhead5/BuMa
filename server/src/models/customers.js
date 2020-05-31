const db = require('../../db/dbConnection');



const getCustomers = () => db.query(`SELECT * FROM customers `);



const getCustomerById = (customerId) => db.query(`SELECT * FROM customers where id = $1`, customerId);



const addCustomer = (name, email, phone, password, userid, paymentStatus, activityStatus, notes, balance) =>

  db.query(
    `INSERT INTO customers (name, email, phone, password, userid, paymentStatus, activityStatus, notes, balance)
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`, [name, email, phone, password, userid, paymentStatus, activityStatus, notes, balance]




  )


const deleteCustomer = (customerId) => db.query(`DELETE FROM customers where id = $1`, customerId)


const editCustomer = (customerId, name, email, phone, password, userid, paymentStatus, activityStatus, notes, balance) =>
  db.query(
  `UPDATE customers
   SET name = $1 ,
   email = $2 ,
   phone = $3 ,
   password = $4 ,
   userid= $5 ,
   paymentStatus = $6,
   activityStatus = $7,
   notes= $8 ,
   balance = $9
   WHERE id = $10 ` , [name, email, phone, password, userid, paymentStatus, activityStatus, notes, balance, customerId]


  )



module.exports = {
  getCustomers,
  getCustomerById,
  addCustomer,
  deleteCustomer,
  editCustomer

};

