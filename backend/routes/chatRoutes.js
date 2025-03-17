const express = require('express');
const router = express.Router();
const {chatUser} = require('../controllers/chatUser')

router.post('/litgptchat', chatUser);

module.exports = router;