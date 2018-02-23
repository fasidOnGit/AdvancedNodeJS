/**
 * A Transform is more than duplex streams wherein its outputs are computed from its input
 * We dont need to implement read or write we just need to implement a transform method
 * which combines both of them.
 */

 const { Transform }  = require('stream');

 const upperCaseTr = new Transform({
     transform(chunk , encoding , callback){
         this.push(chunk.toString().toUpperCase());
         callback();
     }
 });

 process.stdin.pipe(upperCaseTr).pipe(process.stdout);