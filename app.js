const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('hi sabareesan');
})

server.listen(4000);