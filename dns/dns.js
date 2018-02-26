const dns = require('dns');
console.time('fasid')
dns.lookup('fasid.herokuapp.com' , (err , address)=>{
    console.timeEnd('fasid');
    console.log(address);
});
console.time('resolve')
dns.resolve4('fasid.herokuapp.com' , (err , address)=>{
    console.timeEnd('resolve');
    console.log(address);
})
dns.resolveMx('fasid.herokuapp.com' , (err , address)=>{
    // console.timeEnd('resolve');
    console.log('lol',address);
})

dns.reverse('54.225.138.190' , (err , hostname)=>{
    console.log(hostname)
})