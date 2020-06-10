const db = require('../../db/dbConnection');



const getUsers = () => {
    return db.query(`SELECT * FROM users `);
}

const getUserByName = (userName) => {
    return db.query(`SELECT * FROM users where username = $1`, userName);
}



const getUserById = (userId) => {
    return db.query(`SELECT * FROM users where id = $1`, userId);
}

const addUser = (user) => {
    return db.query('INSERT INTO users(first_name, last_name, email, username, password,phone,business_name,business_logo,crn,business_address) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
        [user.first_name, user.last_name, user.email, user.username, user.password, user.phone, user.business_name, user.business_logo, user.crn, user.business_address]);
}

const deleteUser = (userId) => {
    return db.query(`DELETE FROM users where id = $1`, userId)
}

const editUser = (user) =>
    db.query(
        `UPDATE users
   SET 
   first_name = $2,
   last_name= $3,
   email= $4,
   username=$5,
   password= $6,
   phone= $7,
   business_name= $8,
   business_logo=$9,
   crn =  $10,
   business_address=  $11
   WHERE id = $1` , [user.id, user.first_name, user.last_name, user.email, user.username, user.password, user.phone, user.business_name, user.business_logo, user.crn, user.business_address]
    );

module.exports = {
    getUsers,
    getUserByName,
    getUserById,
    addUser,
    deleteUser,
    editUser

};

