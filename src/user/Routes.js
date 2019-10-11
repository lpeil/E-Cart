const { Router } = require('express');
const router = Router();

const { requireSignin, isAdmin, isAuth } = require('../auth/Controller');
const { userById, secret, read, update } = require('./Controller');

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, secret);
router.get('/user/:userId', requireSignin, isAuth, read);
router.put('/user/:userId', requireSignin, isAuth, update);

router.param('userId', userById);

module.exports = router;