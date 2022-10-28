const express = require('express');

const PORT = process.env.PORT || 4000;

const app = express();


app.use(express.json());


app.get('/api', (req, res) => {
    const data = {
        "slackUsername": "Ocee",
        "backend": true,
        "age": 23,
        "bio": "My name is James Ochapa, I am a backend web developer. A graduate of Computer Science from Caritas University"
    };
    res.json(data);
});

app.listen(PORT, () => {console.log(`Server started on port: ${PORT}`)});