const express = require('express');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const models = {
    emotion: require('./models/emotion')
}

mongoose.connect('mongodb://localhost:27017/testrain');

let app = express();

app.use(express.static(path.join(__dirname, 'frontend')));

let api = express.Router();

api.get('/getEmotions', (req, res) => {
    models.emotion.type.find((err, emo) => {
        console.log(emo);
        if(err) {
            res.status(500);
            res.send();
            return;
        }
        res.json(emo);
    });
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