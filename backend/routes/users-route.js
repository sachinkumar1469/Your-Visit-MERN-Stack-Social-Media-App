const express = require('express');

const router = express.Router();
const {check} = require('express-validator');

const fileUpload = require('../middleware/file-upload')

const {userMain,userSignup,userLogin,getUserById} = require('../controller/user-cont')

router.get('/',userMain);

router.get("/:userId",getUserById)


router.post('/login',userLogin);

router.post('/signup',fileUpload.single('image'),[
    check('email').isEmail()
],userSignup)

module.exports = router;