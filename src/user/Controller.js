const User = require('./Model');

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: "User not found"
            })
        }
        req.profile = user;
        next();
    });
}

exports.secret = (req, res) => {
    res.json({ 
        message: "Is Admin" 
    });
}

exports.read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;

    return res.json(req.profile);
}

exports.update = (req, res) => {
    User.findByIdAndUpdate({_id: req.profile._id}, 
        {$set: req.body},
        {new: true},
        (err, user) => {
            if(err) {
                return res.status(400).json({
                    error: "You do not have authorization to do that"
                }); 
            }
            user.hashed_password = undefined;
            user.salt = undefined;

            res.json(user);
        }
    )
}

