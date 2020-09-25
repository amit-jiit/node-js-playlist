//import module
const http = require('http');
const fs = require('fs');
//create server
http.createServer((req,res)=>{
// create read stream to read file
const readstream =fs.createReadStream('./static/index.html');
//telling client wht type of file do i want
res.writeHead(200,{'content-type':'text/html'});
//pipe read stream to where you want to send the file
readstream.pipe(res);
}).listen(3000);