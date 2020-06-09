// use these functions to manipulate our database
// const { findByUsername, addNewUser } = require('../models/users/User.model');


exports.checkUserLogin = async (req, res) => {

    const password = req.body.password;
    const user = req.body.username;

    const username = await findByUsername(user);

    try {

        bcrypt.compare(password, username.password, function (err, result) {

            if (result) {
                jwt.sign(user, process.env.JWT_SECRET, function (err, token) {
                    if (err) {
                        console.log('Error occurred')
                    }

                    res.cookie('access_token', token);
                    res.redirect('/');
                });


            } else {

                res.render("login", {
                    passerr: true,
                    errpassword: "Password is not correct"
                })
            }

        });

    } catch (error) {
        res.render("login", {

            loginerr: true,
            errlogin: error.message
        })
    }


};