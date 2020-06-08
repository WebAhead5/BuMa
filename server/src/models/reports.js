const db = require('../../db/dbConnection');


const getReports = () => db.query(`SELECT * FROM reports `);


const getReportById = (reportId) => db.query(`SELECT * FROM reports where id = $1`,reportId);


const addReport = ({ userid, creatingdate, pdfile }) =>

    db.query(
        `INSERT INTO reports (userid, creatingdate, pdfile)
        VALUES ($1,$2,$3)`, [userid, creatingdate, pdfile]
    );


const deleteReport = (reportId) => db.query(`DELETE FROM reports where id = $1`, reportId)




module.exports = {
    getReports,
    getReportById,
    addReport,
    deleteReport


};

