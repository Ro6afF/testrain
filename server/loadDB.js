const fs = require('fs');
const mongodb = require('mongodb');

let MongoClient = mongodb.MongoClient;

MongoClient.connect('mongodb://localhost:27017/testrain', (err, db) => {
    console.log('Connecting...');
    if(err) {
        console.log(err);
        return;
    }
    console.log('Connected ^_^');
    console.log('Loading data from \'db.json\'');
    let data = JSON.parse(fs.readFileSync('./db.json', 'utf8'));
    console.log('Loaded ^_^');
    for (let i of data) {
        console.log('Loading ' + i.name);
        db.collection(i.name).insertMany(i.data);
        console.log(i.name + ' loaded successfuly ^_^');
    }
    db.close();
    console.log('DONE ^_^');
});