const fs = require('fs');

//call with callback
readFileAsync(__filename , function(err , data){
    if(err) throw err;
    else console.log(data);
    
});

//Promise

readFileAsync(__filename).then(data =>{
    console.log(data);
}).catch(err =>{
    console.error(err);
    
})



function readFileAsync(file, cb=() =>{}){
    return new Promise(function(resolve , reject){
        if(typeof file != 'string'){
            reject('Give a file path');
            cb('Give a file path' , null);
        }else{
            fs.readFile(file , 'utf-8',function(err, data){
                if(err) {
                    reject(err);
                    cb(err);
                }else{
                    resolve(data);
                    cb(null ,data);
                }
            })
        }
    });
}

async function count(){
    try {
        const line = await readFileAsync(__filename);
        console.log('deii',line);
    } catch (err) {
        console.error(err);
    }
}

count()