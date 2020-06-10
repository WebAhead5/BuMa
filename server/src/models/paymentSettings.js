const db = require('../../db/dbConnection');

const getPaymentSettings = () => db.query(`SELECT * FROM payment_settings`);


const getPaymentSetttingsByUserId = (userid) => db.query(`SELECT * FROM payment_settings where userid = $1`,[userid]);


const editPaymentSettings = (user) =>
    db.query(
  `UPDATE payment_settings
   SET currency = $2,
   request_payment_every_value = $3,
   request_payment_every_unit = $4
   WHERE userid = $1` , [user.userid, user.currency, user.request_payment_every_value, user.request_payment_every_unit]
    );



module.exports = {
    getPaymentSettings,
    getPaymentSetttingsByUserId,
    editPaymentSettings

};