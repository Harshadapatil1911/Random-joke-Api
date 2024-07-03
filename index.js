const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Existing joke route
app.get('/api/jokes/random', async (req, res) => {
  try {
    const jokeResponse = await axios.get('https://official-joke-api.appspot.com/random_joke');
    res.json(jokeResponse.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch joke' });
  }
});

// New route for random images
app.get('/api/images/random', async (req, res) => {
  try {
    const imageResponse = await axios.get('https://source.unsplash.com/random');
    res.redirect(imageResponse.request.res.responseUrl);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch image' });
  }
});

// Combined route for jokes and images
app.get('/api/jokes-and-images/random', async (req, res) => {
  try {
    const jokeResponse = await axios.get('https://official-joke-api.appspot.com/random_joke');
    const imageResponse = await axios.get('https://source.unsplash.com/random');
    
    res.json({
      joke: jokeResponse.data,
      image: imageResponse.request.res.responseUrl
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch joke or image' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
