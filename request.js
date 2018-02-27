const http = require('http');

//req: http.ClientRequest
const req = http.get(
    'http://www.google.com',
    (res)=>{
        //res: http.IncomingMessage
        //res readable stream
        res.on('data' , (data)=>{
            console.log(data.toString());
        });
    }
);

req.on('error' , (e)=>console.log(e));
//req writable stream


const https = require('https');

const reqs = https.get(
    'https://www.google.com',
    (res)=>{
        res.on('data' , data=>console.log(data));
    }
);

reqs.on('error' , err=>console.log(err));

//req,reqs: http.Agent
console.log(reqs.agent , req.agent);