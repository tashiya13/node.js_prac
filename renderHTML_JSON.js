const express = require('express');  // Use 'require' to import express
const app = express();  // Initialize the app with express

app.get('/', (req, res) => {
    res.send(`
        <input type='text' placeholder ="Your Name"/>
        <a href='/contact'>Got to Contact us Page</a>
        <a href='/about'>Got to About  us Page</a>

        
        `)
});

app.get('/contact', (req, res) => {
    res.send(`
        <h2>hello express</h2>
        
        `)
});

app.get('/contact', (req, res) => {
    res.send(`
        <h2>hello express</h2>
        
        `)
});


app.get('/contact', (req, res) => {
    res.send(`
        <h2>hello express</h2>
        
        `)
});

// In json form

app.get('/about', (req, res) => {
    res.send([
     {name:"tashiya", address:"xyz"},
     {name:"pqr", address:"abc"}      
    ])
        });









app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
