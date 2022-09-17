let express = require("express"); // express modules, importing express object
let app = express();
let bodyParser = require("body-parser");
let myLogger=require("./MiddleWares/logger");
let basicRoute=require("./Routes/basicRouters");
let fileRoute=require("./Routes/fileRoute");
let userRoute=require("./Routes/userRoutes");
let mongoose = require("mongoose");
let User = require("./models/user");
let Blog = require("./models/blog");
const {response, request} = require("express");
const { MongoCursorInUseError } = require("mongodb");

app.use(bodyParser.json());
app.use(myLogger);
app.use("/basic",basicRoute);
app.use("/file",fileRoute);
app.use("/user",userRoute);
    
mongoose.connect("mongodb+srv://ishita30:Shimla%0482@cluster0.xovxn3t.mongodb.net/blogWebsite?retryWrites=true&w=majority");

const db=mongoose.connection();

db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
})

app.post("/add_blog",async(req,res)=>{
    const blog=new Blog(req.body);
    blog.save();
    res.send(blog);
})




app.get("/user",async(req,res)=>{
    let users = await User.find({name:"ishita"});
    res.send(users);
})

app.listen(8080,function(req,res) {

    console.log("Listening on port " + 8080);
})

