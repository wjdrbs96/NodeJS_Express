var express = require('express');
var router = express.Router();

router.use('/post', require('./post'));
router.use('/user', require('./user'));
router.use('/auth', require('./auth'));
router.use('/login', require('./login'));

module.exports = router;
