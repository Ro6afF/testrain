const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    uId: Number,
    isMale: Boolean,
    age: Number,
    selectedEmotions: [mongoose.Schema.Types.Mixed],
    selectedStatements: [mongoose.Schema.Types.Mixed],
    selectedStatiments: [mongoose.Schema.Types.Mixed]
});

exports.type = mongoose.model("submissions", schema);