const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome to the Express API!');
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
