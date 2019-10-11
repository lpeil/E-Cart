const UserModel = require('../user/Model');
const jwt = require('jsonwebtoken'); // to generate signin token
const expressJwt = require('express-jwt'); // for autorization check
const {errorHandler} = require('../helpers/dbErrorHandler');

exports.signup = (req, res) => {
    // console.log('req.body', req.body);
    const user = new UserModel(req.body);

    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                err: errorHandler(err)
            });
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        })
    });
}

exports.signin = (req, res) => {
    const {email, password} = req.body;

    UserModel.findOne({ email }, (err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: 'User with that email does not exist. Please SingUp'
            });
        }

        if(!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email and password do not match'
            })
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.cookie('t', token, {expire: new Date() + 9999});
        const { _id, name, role } = user;
        return res.json({ token, user: { _id, name, role } });
    }); 
}   

exports.signout = (req, res) => {
    res.clearCookie('t');
    res.json({ message: 'Signout success' });
}

exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: "auth"
})

exports.isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id; 
    
    if(!user) {
        return res.status(400).json({
            error: "Access Denied"
        });
    }
    next();
}

exports.isAdmin = (req, res, next) => {
    if(req.profile.role === 0) {
        return res.status(403).json({
            error: "Admin resource! Access Denied"
        });
    }
    next();
}