const express = require('express');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const models = {
    emotion: require('./models/emotion'),
    statement: require('./models/statement'),
    statiment: require('./models/statiment'),
    submission: require('./models/submission'),
    miniscript: require('./models/miniscript')
}

mongoose.connect('mongodb://localhost:27017/testrain', { useMongoClient: true });

let app = express();

app.use(express.static(path.join(__dirname, 'static')));
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

api.get('/miniscripts', (req, res) => {
    models.miniscript.type.find((err, stat) => {
        if (err) {
            res.status(500);
            res.send();
            return;
        }
        res.json(stat);
    });
});

api.post('/submit', (req, res) => {
    models.submission.type.count({}, (err, cnt) => {
        let newRes = new models.submission.type({
            uId: cnt,
            age: parseInt(req.body.age.value),
            isMale: (req.body.isMale == 'true'), 
            selectedEmotions: req.body.selectedEmotions,
            selectedStatements: req.body.selectedStatements,
            selectedStatiments: req.body.selectedStatiments
        });
        newRes.save((err) => {
            res.send(cnt + "");
        });
    });
})

api.get('/submission/:id', (req, res) => {
    models.submission.type.findOne({uId: req.params.id}, (err, resu) => {
        res.json(resu);
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