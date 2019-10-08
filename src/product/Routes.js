const { Router } = require('express');
const router = Router();

const { create } = require('./Controller');
const { requireSignin, isAdmin, isAuth } = require('../auth/Controller');
const { userById } = require('../user/Controller');

router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create);

router.param('userId', userById);

module.exports = router;