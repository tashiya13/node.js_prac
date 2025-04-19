const express = require("express")
const path = require("path");

const app = express();

const public = path.join(__dirname , "public");
console.log(public);

//  static is not executable function that's why we use express here

app.use(express.static(public));

// if there will be any other html name then we will give path in browser

app.listen(2000, ()=> {
    console.log("port is running")
});




