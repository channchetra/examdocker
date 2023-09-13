const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use the body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Sample data
const data = [
    { id: 1, name: 'Chetra' },
    { id: 2, name: 'Sothy' }
];

// GET endpoint to retrieve all data
app.get('/api/data', (req, res) => {
    res.json(data);
});

// POST endpoint to add new data
app.post('/api/data', (req, res) => {
    const newItem = {
        id: data.length + 1, // Assign a new ID
        name: req.body.name
    };

    data.push(newItem);

    res.json(newItem);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
