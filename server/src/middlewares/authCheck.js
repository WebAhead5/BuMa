const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    //verify route
    const authHeader = req.cookies.access_token
    
    if (authHeader == null) return res.sendStatus(401)
  
    jwt.verify(authHeader, process.env.JWT_SECRET, (err, token) => {
      if (err) return res.sendStatus(403)
      next()
    })
}