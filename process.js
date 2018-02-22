process.on('exit' , function(code){
    //do one final synchronous opertaion
    //before the node process terminates
    console.log(`About to exit with code ${code}`);
    
});


process.on('uncaughtException' , err => {
    //something went unhandeld
    //Do any cleanup and exit anyway!
    console.error(err);
    process.exit(1); //Should manual exit anyway!!
});

//hepp the event loop busy
process.stdin.resume();


//trigger a TypeError exception
console.dog();