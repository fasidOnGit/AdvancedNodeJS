const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    const cpus = os.cpus().length; //determine number of cpus we clone the application
    for (let i = 0; i < cpus; i++) {
            cluster.fork(); //fork application  
    }
    //sending message to worker process
    Object.values(cluster.workers).forEach(worker =>{
        worker.send(`Hellow Worker ${worker.id}`);
    })

    //automated restart the server

    cluster.on('exit' , (worker , code , signal) =>{
        if(code !==0 && !worker.exitedAfterDisconnect){ //checking the exit was not manual by the master
            console.log(`Worker ${worker.id} crashed `   + ` Starting a new worker`);
            cluster.fork();
        }
    });

    cluster.on('error' , (args) =>{
        console.log(args);
    })
} else{
    require('./server');
}