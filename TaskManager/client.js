const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const client = new EventEmitter();
const server = require('./server')(client);

server.on('response' , (response)=>{
    console.clear();
    process.stdout.write(response)
    process.stdout.write('\n>');
})
let command , ars;

rl.on('line' , input => {
    [command , ...args] = input.split(' ');
    client.emit('command' , command ,args);
})