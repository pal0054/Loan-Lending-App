const express = require("express");
const route = express.Router();

route.get('/',(req,res)=>{
    console.log("Home Page")
    res.send("Yes")
})


module.exports = route;