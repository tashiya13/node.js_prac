const express = require("express");
const path = require("path");

const public = path.join(__dirname, "public"); 

const app = express();

app.get('/', (req, res) => {
    
    res.sendFile(path.join(public, 'index.html'));
});

app.get('/home', (req, res) => {
    
    res.sendFile(path.join(public, 'home.html'));
});


app.get('*', (req, res) => {
 
    res.sendFile(path.join(public, 'pagenotfound.html'));
});


app.listen(2000);
