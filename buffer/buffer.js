//Buffer

/*
    A buffer is essentially a chunk of memory allocated outside of the V8 heap,
    and we can put some data in that.
    TO use Buffer must specify Character encoding
    Buffers are array like objects but unlike arrays they cant be resized

    3 ways to create buffer : 
        1.Buffer.from()
        2.Buffer.alloc(),
        3Buffer.allocUnsafe()
*/


const string  = 'touche';
const buffer = Buffer.from('touche');

console.log(string  , string.length);
console.log(buffer , buffer.length);



