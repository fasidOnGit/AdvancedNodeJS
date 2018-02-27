Promise.resolve().then(()=>console.log('promise 1 resolved'));
process.nextTick(()=>console.log('nextTick executed'));
Promise.resolve().then(()=>console.log('Promise2 resolved'));
setImmediate(()=>console.log('immediate executed'));
setTimeout(()=>console.log('timeout executed'));
require('fs').readFile('./package.json' , 'utf-8',(err , data)=>setImmediate(()=>console.log('setImmediate inside fs')));
setTimeout(()=>console.log('timeout2 executed'));
setTimeout(()=>console.log('timeout timer executed'),10);

/**
 * 
nextTick executed
promise 1 resolved
Promise2 resolved
timeout executed
timeout2 executed
immediate executed
{
  "name": "AdvancedNode",
  "version": "1.0.0",
  "description": "Learning Advanced Nodejs...",
  "main": "expModule.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/fasidOnGit/AdvancedNodeJS.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/fasidOnGit/AdvancedNodeJS/issues"
  },
  "homepage": "https://github.com/fasidOnGit/AdvancedNodeJS#readme",
  "dependencies": {
    "body-parser": "^1.18.2",
    "express": "^4.16.2",
    "multer": "^1.3.0",
    "request": "^2.83.0",
    "request-promise": "^4.2.2",
    "xlsx": "^0.12.2"
  }
}
 */ 