const express = require("express");
const route = express.Router({ mergeParams: true });
const{signinroute,registerroute} = require('../controller/user')

route.post('/signin',signinroute)
route.post('/register',registerroute)
route.get('/',(req,res)=>{

    res.send('users')
})

module.exports = route