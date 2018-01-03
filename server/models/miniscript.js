const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: Number,
    bg_name: String,
    en_name: String,
    subscript_id: Number,
    domain1_id: Number,
    domain2_id: Number,
    bg_desc: String,
    en_desc: String
});

exports.type = mongoose.model("miniscripts", schema);