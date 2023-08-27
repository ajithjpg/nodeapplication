const express = require("express");
const route = express.Router({ mergeParams: true });

route.get('/',(req,res)=>{
    res.status(200)
    res.send('task')
})
module.exports = route