const express = require('express');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const models = {
    emotion: require('./models/emotion'),
    statement: require('./models/statement'),
    statiment: require('./models/statiment')
}

mongoose.connect('mongodb://localhost:27017/testrain');

let app = express();

app.use(express.static(path.join(__dirname, 'frontend')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let api = express.Router();

api.get('/emotions', (req, res) => {
    models.emotion.type.find((err, emo) => {
        if (err) {
            res.status(500);
            res.send();
            return;
        }
        res.json(emo);
    });
});

api.get('/statements', (req, res) => {
    models.statement.type.find((err, stat) => {
        if (err) {
            res.status(500);
            res.send();
            return;
        }
        res.json(stat);
    });
});

api.get('/statiments', (req, res) => {
    models.statiment.type.find((err, stat) => {
        if (err) {
            res.status(500);
            res.send();
            return;
        }
        res.json(stat);
    });
});

api.post('/submit', (req, res) => {
    console.log(req.body);
})

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