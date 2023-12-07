const express = require('express');
require('dotenv').config()
const router = express.Router();

const {login,signup} =require('../functions/auth')
const {Createnote,Deletenote} = require('../functions/note')

router.get('/Login',login)
router.get('/Signup' ,signup)
router.get('/Createnote',Createnote)
router.get('/Deletenote', Deletenote)

module.exports = {router}