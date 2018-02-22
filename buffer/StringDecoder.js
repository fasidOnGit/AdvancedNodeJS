const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf-8');

process.stdin.on('readable' , () =>{
    const chunk = process.stdin.read();
    if(chunk !=null){
        const buffer = Buffer.from([chunk]);

        console.log('With toString()' , buffer.toString());
        console.log('With StringDecoder:', decoder.write(buffer));
        //If you are using UTF-8 bytes as chunks in a stream ,you should always use StringDecoder
        //coz they dont write the incomplete bytes thats recieved from one chunk.
        //it would wait for the stream to be compelte then print them..
        
        
    }
})