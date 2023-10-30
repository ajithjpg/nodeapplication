
const mongoose = require('mongoose')

var Schema = mongoose.Schema;

const dbcon = require('../models/db')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: false,
        
    },
    password: {
        type: String,
        required: true

    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false

    },
})

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;