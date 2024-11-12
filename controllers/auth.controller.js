const { generateToken } = require('../jwt.util');

const AuthRouter = require('express').Router();
//  Description=login req
// method=post
//  path=/api/auth/login
AuthRouter.post('/login', function(req, res) {
    return res.status(200).json({
        token: generateToken(),
        message: 'login successful'
    }) 
})



module.exports = AuthRouter;
