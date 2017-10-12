const express = require('express');
const path = require('path');
const http = require('http');

let app = express();

app.use(express.static(path.join(__dirname, 'frontend')));

let api = express.Router();

api.get('/', (req, res) => {
    res.send('API here!');
});

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

let server = http.createServer(app);

server.listen(port, () => {
    console.log('Server listening on http://localhost:3000');
});