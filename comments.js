// Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/comments', (req, res) => {
    res.send('This is a GET request')
});

app.post('/comments', (req, res) => {
    res.send('This is a POST request')
});

app.put('/comments', (req, res) => {
    res.send('This is a PUT request')
});

app.delete('/comments', (req, res) => {
    res.send('This is a DELETE request')
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/comments');
});