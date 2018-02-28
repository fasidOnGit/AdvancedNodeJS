const { spawn } = require('child_process');
//spawn doesn't  create shell - slightly efficient
const child = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm' , ['-v']);

child.on('error' , (err)=> console.error(err));

child.on('exit' , function(code , signal){
    console.log(`child process exited with code ${code} and signal ${signal}`);
});

//other events on child: disconnect , error , message , close
//stdio objects: child.stdin , child.stdout , child.stderr

child.stdout.on('data' , data => console.log(`child stdout: ${data}`));
child.stderr.on('data' , err => console.log(`child stderr : ${err}`));



//Shell mode
// const childShell = spawn('npm -v' ,{
//     detached:true,//runs child process independently of its parent process
//     stdio : 'inherit',
//     shell:true,
//     cwd:'change/the/working/dir/of/child/process'
// });


const childDetach = spawn('node' , ['eventloop.js'] , {
    detached:true,
    stdio:'ignore'
});
childDetach.unref();

