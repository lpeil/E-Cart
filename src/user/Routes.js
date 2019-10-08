const { Router } = require('express');
const router = Router();

const { requireSignin, isAdmin, isAuth } = require('../auth/Controller');
const { userById } = require('./Controller');

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({ 
        user: req.profile 
    });
});

router.param('userId', userById);

module.exports = router;