const express = require('express');
const noterouter = express.Router();

const {Createnote,Deletenote} = require('../functions/note')

const {islogin} = require('../middleware/islogin')


noterouter.get('/Createnote',islogin,Createnote)
noterouter.get('/Deletenote',islogin, Deletenote)

module.exports = {noterouter}