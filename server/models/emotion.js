const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: Number,
    bg_name: String,
    en_name: String,
    dimension_id: Number,
    script_id: Number,
    domain_id: Number,
    string_id: Number,
    tension_id: Number
});

exports.type = mongoose.model("emotions", schema);