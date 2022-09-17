let express=require("express");
let fs=require("fs");
let path =require("path");
let route=express.Router();

route.get("/read",(req,res)=>{
    let data = fs.readFileSync(path.resolve(__dirname,"./user.txt"),(error,data)=>{
        if(error){
            console.log(error);
            res.send(error);
        }
        else{
            res.send(data);
            console.log("file read success");
        }
    });
        res.send(data);
        console.log("I am not blocked by read file");
})

module.exports=route;