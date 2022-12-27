const express = require('express');

const router = express.Router();

const {userMain} = require('../controller/user-cont')

router.get('/',userMain)

module.exports = router;