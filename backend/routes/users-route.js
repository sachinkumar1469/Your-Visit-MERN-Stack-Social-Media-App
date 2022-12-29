const express = require('express');

const router = express.Router();
const {check} = require('express-validator');

const {userMain,userSignup,userLogin,getUserById} = require('../controller/user-cont')

router.get('/',userMain);

router.get("/:userId",getUserById)


router.post('/login',userLogin);

router.post('/signup',[
    check('email').isEmail()
],userSignup)

module.exports = router;