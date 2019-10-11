const { Router } = require('express');
const router = Router();

const { create, productById, read, remove, update, list, listRelated } = require('./Controller');
const { requireSignin, isAdmin, isAuth } = require('../auth/Controller');
const { userById } = require('../user/Controller');

router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create);
router.get('/product/:productId', read);
router.put('/product/:productId/:userId', requireSignin, isAuth, isAdmin, update);
router.delete('/product/:productId/:userId', requireSignin, isAuth, isAdmin, remove);
router.get('/products', list);
router.get('/products/related/:productId', listRelated);

router.param('userId', userById);
router.param('productId', productById);

module.exports = router;