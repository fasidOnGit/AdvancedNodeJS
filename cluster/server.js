const http = require('http');

var server = http.createServer();

server.on('request' , (req  , res)=>{
    for(var i=0;i<1e6;i++);
    res.end(`Process handled by ${process.pid}`)
}).listen(8000 , () => console.log('Started the server on 8000'))

process.on('message' , msg => console.log(`Mesasge from master ${msg}`));

process.on('error' , err => console.log(err));



// setTimeout(() =>{
//     process.exit(1);
// } , Math.random() * 1000);