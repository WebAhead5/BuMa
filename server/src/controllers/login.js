// use these functions to manipulate our database
const { getUserByName } = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.checkUserLogin = async (req, res) => {

    const password = req.body.password;
    const userName = req.body.username;

    const userData = await getUserByName(userName);


    try {

        (userData.length) < 1 ? res.status(404).json({ message: 'No user found' }) :

        bcrypt.compare(password, userData[0].password, function (err, result) {

            if (result) {

                res.status(200).json({ message: 'Login Successfully' });

            } else {
                res.status(404).json({ message: 'Your username or password seems to be incorrect' });

            }

        })

    } catch {

        return res.status(500).json({ error: "Error Occurred" })

    }

}