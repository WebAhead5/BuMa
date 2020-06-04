const db = require('../../db/dbConnection');



const getAppointments = () => {
    return db.query(`SELECT * FROM appointments `);
}



const getAppointmentById = (appointmentId) => {
    return db.query(`SELECT * FROM appointments where id = $1`, appointmentId);
}



const addAppointment = ({ userid, day, start_at, end_at, note }) => {
    return db.query(
        `INSERT INTO appointments (userid, day, start_at, end_at, note)
         VALUES ($1,$2,$3,$4,$5)`, [userid, day, start_at, end_at, note]
    );
}

const deleteAppointment = (appointmentId) => {
    return db.query(`DELETE FROM appointments where id = $1`, appointmentId)
}


const editAppointment = (appointment) =>
   db.query(
    `UPDATE appointments
   SET userid = $2,
   day = $3,
   start_at = $4,
   end_at = $5,
   note = $6
   WHERE id = $1` , [appointment.id,appointment.userid, appointment.day, appointment.start_at, appointment.end_at, appointment.note]
  );

module.exports = {
    getAppointments,
    getAppointmentById,
    addAppointment,
    deleteAppointment,
    editAppointment

};

