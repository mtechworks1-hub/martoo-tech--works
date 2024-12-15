const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// In-memory database for demo purposes (replace with a real database)
let reactions = {
  angry: 0,
  sad: 0,
  happy: 0,
  love: 0,
  excited: 0,
};

app.use(bodyParser.json());

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

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
