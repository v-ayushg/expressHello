const express = require('express');
const path = require('path'); // Add this line
const app = express();
const port = 3000;

// Home route
app.get('/', (req, res) => {
  res.send('I am Ayush and this is my expressJs deployed through Github actions on Azure!');
});

// Serve static files from the "views" directory
app.use(express.static(path.join(__dirname, 'views')));

// About Us route
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
