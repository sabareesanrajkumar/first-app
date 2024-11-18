const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('hi sabareesan');
    const {url} = req;
    res.setHeader( 'Content-Type','text/html');
    if (url == '/home') {
        res.write(`<html><body>Welcome Home</body></html>`);
        res.end();
    } else if (url == '/about') {
        res.write(`<html><body>Welcome to About Us page</body></html>`);
        res.end();
    } else if (url == '/node') {
        res.end(`<html><body>Welcome to my Node Js project</body></html>`);
    } else {
        res.end('404 Not Found');
    }
});

server.listen(4000);