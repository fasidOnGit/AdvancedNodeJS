const fs = require('fs');
//server:http.Server
const server = require('http')
    .createServer();

    server.on('request' , (req ,res)=>{
        //req: http.IncomingMessage
        //res: http.ServerResponse    
        
        switch (req.url) {
            case '/':
                res.writeHead(200 , {'content-type':'text/plain'});
                res.end('Hello world!! \n')
                break;
            case '/home':
                res.writeHead(200 , { 'Content-Type': 'type/html'});
                res.end(fs.readFileSync('./index.html'));
            default:
                break;
        }

    });

    server.listen(8000);