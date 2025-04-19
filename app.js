const express = require('express');
const app = express();
app.get('',(req,res)=>{
    res.send("good morning expressjs")
})
app.get('/contact',(req,res)=>{
    res.send('contact us')
})