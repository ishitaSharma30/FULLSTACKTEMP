let mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {typr : String,required : true},
    age : Number,
    username : {type : String,required : true},
    password : {type : String, requires : true},
    email : String
});

const User = mongoose.model("User",userSchema);

module.exports = User;