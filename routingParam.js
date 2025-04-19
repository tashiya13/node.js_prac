const express = require('express');

const app = express();

app.get('', (req, res) => {
    const name = req.query.name;
    const lastName = req.query.lastName;
    
    if (name && lastName) {
        res.send(`Welcome ${name} ${lastName}`);  // Send both name and last name in one response
    } else {
        res.send("Routing Parameter in Express");
    }
});

app.listen(2000, () => {
    console.log("Server is running on port 2000");
});
