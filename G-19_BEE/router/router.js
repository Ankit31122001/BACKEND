const express = require('express');
require('dotenv').config()
const router = express.Router();

router.get('/hello',(req,res)=>{
    res.send("Hello Friend, How are you");
})

module.exports = {router}