const getPaymentSettings = () => db.query(`SELECT * FROM payment_settings`);


const editPaymentSettings = (user) =>
    db.query(
  `UPDATE payment_settings
   SET currency = $2,
   request_payment_every_value = $3,
   request_payment_very_unit = $4,
   WHERE id = $1` , [user.userid, user.currency, user.request_payment_every_value, user.request_payment_very_unit]
    );



module.exports = {
    getPaymentSettings,
    editPaymentSettings

};