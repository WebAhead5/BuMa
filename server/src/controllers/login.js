// use these functions to manipulate our database
const { getUserByName } = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.checkUserLogin = async (req, res ) => {

    const password = req.body.password;
    const userName = req.body.username;
    

    const userData = await getUserByName(userName);


    try {

        (userData.length) < 1 ? res.status(404).json({ message: 'No user found' }) :

        bcrypt.compare(password, userData[0].password, function (err, result) {

            if (result) {
                jwt.sign((userData[0].id).toString(), process.env.JWT_SECRET, function (err, token) {
                    if (err) {
                      console.log('Error occurred')
                    }
                    console.log('token : ' ,token)
                    res.cookie('access_token', token);
          

                })
               

            } else {
                res.status(404).json({ message: 'Your username or password seems to be incorrect' });
                res.redirect('/');

            }

        })

    } catch {

        return res.status(500).json({ error: "Error Occurred" })

    }

}