const express = require('express');

const app = express();

const path = require('path');

const port = 3030;

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.resolve("./views/index.html")));
app.get('/', (req, res) => res.sendFile(path.resolve("./views/register")));
app.get('/', (req, res) => res.sendFile(path.resolve("./views/login")));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));