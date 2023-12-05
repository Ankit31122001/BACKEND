const express = require('express')
require('dotenv').config();
const app = express();
const {router} = require('./router/router')
const port = process.env.port

app.use(router)

app.listen(3000,()=>{
    console.log("app started");
})
