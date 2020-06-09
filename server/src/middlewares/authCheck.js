const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    //get cookie
    console.log('your incoming cookie' ,req.cookies)
    next()
    // if (req.cookies.access_token) {

    //     jwt.verify(req.cookies.access_token, process.env.JWT_SECRET, function (err, decoded) {

    //         if (err) {

    //             res.locals.error = err;
    //             return next();

    //         }

    //         res.locals.user = decoded;
    //         res.locals.signedIn = true;
    //         next()


    //     })

    // } else {

    //     res.locals.user = null;
    //     res.locals.signedIn = false;

    //     next()

    // }


}