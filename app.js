const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res)=>{
    const {url} = req;
    const {method} = req;
    if (url === '/') {
        fs.readFile('message.txt', (err, message)=>{
            res.write(`
                <html>
                    <title>Messge</title>
                <body>
                    <form action = "/message" method = "POST">
                        <p>${message}</p>
                        <input type="text" name="message">
                        <button type="submit">Send</button>
                    </form>
                </body>
                </html>`);
                return res.end();
        });
    }
    
    if (url === '/message' && method === 'POST'){
        const body = [];

        req.on('data', (chunk)=>{
            body.push(chunk);
        });

        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFile('message.txt', message, (err)=>{
                res.statusCode = 302;
                res.setHeader('location', '/');
                return res.end();
            });            
        });
    }
});

server.listen(4000);
