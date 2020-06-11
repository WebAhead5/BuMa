const queries = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const {
    validateSignupData,
    validateLoginData,
} = require("../util/validators")

exports.getUsers = (req, res) => {
    queries.getUsers()
        .then(users => res.status(200).json({ users, code: 200 }))
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}

exports.getOneUser = (req, res) => {
    queries.getUserById(req.params.id)
        .then(user =>
            user.length < 1 ? res.status(404).json({ message: 'No user found' }) :
                res.status(200).json({ user, code: 200 }))
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}

exports.addUser = (req, res) => {
    const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        phone: req.body.phone,
        business_name: req.body.business_name,
        business_logo: req.body.business_logo,
        crn: req.body.crn,
        business_address: req.body.business_address
    };
    //---------------------- Validate  -------------------------- //

    const { valid, errors } = validateSignupData(newUser);

    if (!valid) return res.status(400).json(errors);



    //---------------------- Hash Password  -------------------------- //


    bcrypt.hash(req.body.password, 10, (err, hash) => {

        newUser.password = hash;

        // add to database
        queries.addUser(newUser)
            .then(() => {
                res.status(200).json({ message: 'user added successfully', code: 200 })
            })
            .catch(err => {
                console.error(err)
                return res.status(500).json({ error: err.code })
            });

    });

}

exports.deleteUser = (req, res) => {
    const id = req.params.id
    queries.deleteUser(id)
        .then(() => res.status(200).json({ message: 'User Deleted successfully', code: 200 }))
        .catch(err => {
            console.error(err);
            return res.status(500).json({ error: err.code })
        })
}

exports.updateUser = (req, res) => {
    const newUser = {
        id: req.params.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        phone: req.body.phone,
        business_name: req.body.business_name,
        business_logo: req.body.business_logo,
        crn: req.body.crn,
        business_address: req.body.business_address
    };
    queries.editUser(newUser)
        .then(() => res.status(200).json({ message: 'user updated successfuly', code: 200 }))
        .catch(err => {
            console.error(err);
            return res.status(500).json({ error: err.code })
        })
}



exports.login = async (req, res) => {

    const password = req.body.password;
    const userName = req.body.username;


    const userData = await queries.getUserByName(userName);


    try {

        (userData.length) < 1 ? res.status(404).json({ message: 'No user found' }) :

            bcrypt.compare(password, userData[0].password, function (err, result) {

                if (result) {
                    const accessToken = generateAccessToken((userData[0].id).toString())
                    res.cookie('access_token', accessToken)
                    res.status(200).json({ user: userData[0], code: 200 })
                    res.end()

                } else {
                    res.status(404).json({ message: 'Your username or password seems to be incorrect' });
                }
            })

    } catch {

        return res.status(500).json({ error: "Error Occurred" })

    }

}

function generateAccessToken(user) {
    return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '30m' })
}





exports.logout = (req, res) => {

    try {
        res.clearCookie('access_token');
        res.status(200).json({ code: 200 })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err })
    }
}



