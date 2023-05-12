const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static('server/public/build'));

// Define a route for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
});

const port = 8001;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});