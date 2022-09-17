let express=require("express");
const User = require("../models/user");
let route=express.Router();
const {response} = require("express");

route.post("/",async(req,res)=>{
    const user = new User({name: req.body.name, age:req.body.age,username: req.body.username, password: req.body.password, email: request.body.email});
    await user.save();
    res.send(user);
});

module.exports = route;