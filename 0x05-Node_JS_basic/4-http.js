// Create a small HTTP server using Node's HTTP module
const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header content type to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response body
  res.end('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
