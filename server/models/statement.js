const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: Number,
    bg_name: String,
    en_name: String,
});

exports.type = mongoose.model("statements", schema);