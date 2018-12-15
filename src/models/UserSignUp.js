const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSignUp = new Schema({
    id: String,
});

module.exports = mongoose.model('UserSignUp', UserSignUp); //module.exports exporta para poder usarlo en otra parte