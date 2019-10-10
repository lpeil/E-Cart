const { Router } = require('express');
const router = Router();

const { create, productById, read, remove } = require('./Controller');
const { requireSignin, isAdmin, isAuth } = require('../auth/Controller');
const { userById } = require('../user/Controller');

router.delete('/product/:productId/:userId', requireSignin, isAuth, isAdmin, remove);
router.get('/product/:productId', read);
router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create);

router.param('userId', userById);
router.param('productId', productById);

module.exports = router;