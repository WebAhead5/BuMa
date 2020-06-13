const db = require('../../db/dbConnection');

const getPayments = () => db.query(`SELECT * FROM payments `);

const getPaymentById = (paymentId) => db.query(`SELECT * FROM payments where id = $1`, paymentId);

const getPaymentsByCustomerID = (customerId) => db.query(`SELECT * FROM payments where customerid = $1`, customerId);

const addPayment = ({ userid, creatingdate, pdfile }) =>

    db.query(
        `INSERT INTO payments (customerid, paymentdate, price, vat, total)
        VALUES ($12,$,$3,$4,$5)`, [customerid, paymentdate, price, vat, total]
    );

const deletePayment = (paymentId) => db.query(`DELETE FROM payments where id = $1`, paymentId)


module.exports = {
    getPayments,
    getPaymentById,
    getPaymentsByCustomerID,
    addPayment,
    deletePayment
};