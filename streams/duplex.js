/**
 * The readable and writable duplex stream operates independent of one another
 * just like two features in one object
 */

const { Duplex }  = require('stream');

const inoutStream = new Duplex({
    write(chunk , encoding , callback){
        setTimeout(() =>{
            console.log(chunk.toString());
            callback();
        },100)
    },
    read(size){
        if(this.currentCharCode > 90){
            this.push(null);
            return;
        }
        this.push(String.fromCharCode(this.currentCharCode++));
    }
});

inoutStream.currentCharCode = 65;
process.stdin.pipe(inoutStream).pipe(process.stdout);