
const mongoose = require('mongoose');
require("dotenv").config()

const connect = mongoose.connect(process.env.Mango_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Database connected successfully"))
.catch((err) => console.log(err.message));

module.exports =connect