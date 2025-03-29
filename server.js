const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static('.'));

// Handle form submissions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit-quote', (req, res) => {
  console.log('Quote Request Received:', req.body);
  // Here you would normally save this to a database
  res.json({ success: true, message: 'Quote request received successfully!' });
});

app.listen(port, () => {
  console.log(`SB Electronics website running at http://localhost:${port}`);
});