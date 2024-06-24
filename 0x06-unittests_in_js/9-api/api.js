const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint for root route
app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

// Endpoint for /cart/:id
app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// Start the server
const port = 7865;
const server = app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = server;
