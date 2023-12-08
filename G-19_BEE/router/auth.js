const express = require('express');
const authrouter = express.Router();

const {login,signup} =require('../functions/auth')
const {checkcred} = require('../middleware/checkcreds')
authrouter.get('/login',login)
authrouter.post('/signup' ,checkcred,signup)


module.exports = {authrouter}