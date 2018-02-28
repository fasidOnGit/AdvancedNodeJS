process.on('message' , msg => console.log("message from parent" , msg));

let arr = [];

setInterval(() => process.send(arr.push(Math.random())) , 1000);
