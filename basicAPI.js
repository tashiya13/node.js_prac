const http = require('http');
const data = require('./empData')

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application\json'});
    // res.write(JSON.stringify({name:"tashiya" , dep :'cs'}))
    res.write(JSON.stringify(data))
    res.end();

}).listen(1000 );
   
