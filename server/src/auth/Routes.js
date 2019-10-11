const { Router } = require('express');
const router = Router();

const { signup, signin, signout, requireSignin } = require('../auth/Controller');
const { userSignUpValidator } = require('../validator');

router.post('/signup', userSignUpValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;