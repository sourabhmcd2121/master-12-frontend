// server.js (or index.js)

const express = require('express');
const cors = require('cors');
const app = express();
const port = 8086;

// Enable CORS for all origins
app.use(cors());

// Define your routes
app.get('/web/master/getAllGeoCountryList', (req, res) => {
    // Your route logic here
    res.json({ message: 'CORS is enabled' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
