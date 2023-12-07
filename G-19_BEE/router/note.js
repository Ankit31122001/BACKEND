const express = require('express');
const noterouter = express.Router();

const {Createnote,Deletenote} = require('../functions/note')

const {islogin} = require('../middleware/islogin')


noterouter.get('/Createnote',Createnote)
noterouter.get('/Deletenote', Deletenote)

module.exports = {noterouter}