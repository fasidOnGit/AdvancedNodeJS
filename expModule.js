// exports.id =1 //this is ok
// exports = {id : 1} //this is not ok

// module.exports = {id:1}; // this is ok

// //WHY??

// var g = 42 //local to this file



const printStars = require('./printStars');

printStars(10 , 'Hi');

//caching
var path = require('path');
var file = path.join(__dirname , 'printStars.js');
//delete cache...
delete require.cache[file];

require('./printStars')