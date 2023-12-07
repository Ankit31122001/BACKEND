const express = require('express');
const authrouter = express.Router();

const {login,signup} =require('../functions/auth')

authrouter.get('/Login',login)
authrouter.get('/Signup' ,signup)


module.exports = {authrouter}