const http = require('http');

// http.createServer((request,response)=>{
//     // response.write("hello from node js")
//     response.writeHead(200,{'Content-Type':'text/html'});
//     response.write("<h2>hello from node js</h2>")
//     response.end();
// }).listen(1000)


// function parameter
const sayHello = (request , response) =>{
    response.write("hello from nodejs")
    response.end()
    
}

http.createServer(sayHello).listen(1000, ()=> {
    console.log("server is running...")
})
