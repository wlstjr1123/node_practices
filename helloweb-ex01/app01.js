const http = require('http');

const port = 8080;
const server = http.createServer(function(req, resp) {
    resp.writeHead(200, {
        'Content-Type': 'text/html'
    });
    resp.end('<h1>Hello World</h1>');
});

server.listen(port, function() {
    console.log(`http server running on ${port}`);
});