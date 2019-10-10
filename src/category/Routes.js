const { Router } = require('express');
const router = Router();

const { create, categoryById, read, update, remove, list } = require('./Controller');
const { requireSignin, isAdmin, isAuth } = require('../auth/Controller');
const { userById } = require('../user/Controller');

router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);
router.get('/category/:categoryID', read);
router.put('/category/:categoryID/:userId', update);
router.delete('/category/:categoryID/:userId', remove);
router.get('/categories', list);

router.param('userId', userById);
router.param('categoryID', categoryById);

module.exports = router;