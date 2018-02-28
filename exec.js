const { exec } = require('child_process');

exec('cls' , (err , stdout , stderr) =>{
    if(err) return console.log(err);

})