const express = require('express');
const router = express.Router();

const {login,signup} =require('../functions/auth')
const {Createnote,Deletenote} = require('../functions/note')
const {noterouter} = require('./note')
const {authrouter} = require('./auth')

router.use(noterouter)
router.use(authrouter)

module.exports = {router}