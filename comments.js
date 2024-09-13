// Create web server
const express = require('express');
const app = express();
const fs = require('fs');

// Create a file to store comments
const commentsFile = 'comments.json';

// Read the comments from the file
const comments = JSON.parse(fs.readFileSync(commentsFile));

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add a comment
app.post('/comments', express.json(), (req, res) => {
  const comment = req.body;
  comments.push(comment);
  fs.writeFileSync(commentsFile, JSON.stringify(comments));
  res.status(201).json(comment);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started');
});