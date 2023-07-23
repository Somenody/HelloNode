const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Welcome to you user</title>
    </head>
    <body>
      <h1>Hello, Internet!</h1>
    </body>
    </html>
  `);
  // end of the HTML code 
});
server.listen(PORT);


