import express from 'express';
import http from 'request-promise';

let server = express();

server.get('/', async function(request, response) {
    let result = await http('http://www.google.com');
    response.send(result);
});

var port = 3000;
server.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});