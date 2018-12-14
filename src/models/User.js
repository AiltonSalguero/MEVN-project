const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: Number,
    password: String,
    confirmpassword: String,
    job: String,
    tardiness: Number
});

module.exports = mongoose.model('User', User); //module.exports exporta para poder usarlo en otra parte