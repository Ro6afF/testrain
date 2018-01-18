const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: Number,
    bg_name: String,
    en_name: String,
    en_desc: String,
    bg_desc: String,
    score_group: [String]
});

exports.type = mongoose.model("managements", schema);