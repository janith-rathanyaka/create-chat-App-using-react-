const express = require('express')

const config = require('./config/app');
const router = require('./router')
const bodyParser = require('body-parser')
const app=express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(router)




//const port = process.env.appPort
const port=config.appPort;
app.listen(port,()=>{
    console.log('Sever listing on port ${port}');
})


console.log("hello world");