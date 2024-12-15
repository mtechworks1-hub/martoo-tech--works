// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();

// Use body-parser middleware
app.use(bodyParser.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to Martoo Tech Works!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
