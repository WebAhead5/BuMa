const db = require('../../db/dbConnection');



const getCustomers = () => db.query(`SELECT * FROM customers `);



const getCustomerById = (customerId) => db.query(`SELECT * FROM customers where id = $1`, customerId);



const addCustomer = ({ name, email, phone, userid, paymentStatus, activityStatus, notes, balance, appointmentPrice,
  paymentEveryValue,
  paymentEveryUnit,
  balanceValidUntil }) =>

  db.query(
    `INSERT INTO customers (name, email, phone, userid, paymentStatus, activityStatus, notes, balance,appointmentPrice,
      paymentEveryValue,
      paymentEveryUnit,
      balanceValidUntil)
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`, [name, email, phone, userid, paymentStatus, activityStatus,
    notes,
    balance,
    appointmentPrice,
    paymentEveryValue,
    paymentEveryUnit,
    balanceValidUntil]
  );


const deleteCustomer = (customerId) => db.query(`DELETE FROM customers where id = $1`, customerId)


const editCustomer = ({ customerId, name, email, phone, paymentStatus, activityStatus, notes, balance,
  appointmentPrice,
  paymentEveryValue,
  paymentEveryUnit,
  balanceValidUntil }) =>
  db.query(
    `UPDATE customers
   SET name = $2 ,
   email = $3 ,
   phone = $4 ,
   paymentStatus = $5,
   activityStatus = $6,
   notes= $7 ,
   balance = $8,
   appointmentPrice = $9,
   paymentEveryValue = $10,
   paymentEveryUnit = $11,
   balanceValidUntil = $12
   WHERE id = $1 ` , [customerId, name, email, phone, paymentStatus, activityStatus, notes, balance,
    appointmentPrice,
    paymentEveryValue,
    paymentEveryUnit,
    balanceValidUntil]
  );



module.exports = {
  getCustomers,
  getCustomerById,
  addCustomer,
  deleteCustomer,
  editCustomer

};

