const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// In-memory database for demo purposes (replace with a real database)
let reactions = {
  angry: 0,
  sad: 0,
  happy: 0,
  love: 0,
  excited: 0,
};

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files (like HTML, CSS, JavaScript) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get all reactions
app.get('/api/reactions', (req, res) => {
  res.json(reactions);
});

// API endpoint to update a reaction
app.post('/api/reactions', (req, res) => {
  const { reactionType, action } = req.body;

  if (reactions[reactionType] !== undefined) {
    if (action === 'add') {
      reactions[reactionType]++;
    } else if (action === 'remove') {
      reactions[reactionType] = Math.max(0, reactions[reactionType] - 1);
    }
    return res.json({ success: true, reactions });
  }

  res.status(400).json({ success: false, message: 'Invalid reaction type' });
});

// Set the server to listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
