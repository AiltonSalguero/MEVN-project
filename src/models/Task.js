const mongoose = require('mongoose');
const { Schema } = mongoose;

const Task = new Schema({
    title: String,
    description: String
});

module.exports = mongoose.model('Task', Task); //module.exports exporta para poder usarlo en otra parte