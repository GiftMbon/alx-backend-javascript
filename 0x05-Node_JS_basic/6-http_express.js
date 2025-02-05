const express = require('express');

// Initialize an Express application
const app = express();

// Define a route for the root endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});
