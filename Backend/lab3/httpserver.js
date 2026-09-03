import http from 'http';

const server = http.createServer((req, res) => {
    console.log("URL:", req.url);
    console.log("Method:", req.method);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello, World!`);
});

const port = 7000;
server.listen(port, () => {
  
    const message = `Server is running on http://localhost:${port}/`;
    console.log(message);
 
});