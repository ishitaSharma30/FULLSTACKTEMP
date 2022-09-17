let express=require("express");
let route=express.Router();
let checkAuth=require("../MiddleWares/checkAuthencation");


route.get("/user",checkAuth,(req,res)=>{
    res.send("GET REQUEST");
})

route.post("/user",(req,res)=>{
    res.send("POST REQUEST");
    console.log("post body :"+req.body.username);
})

route.delete("/user",(req,res)=>{
    res.send("DELETE REQUEST");
})

route.get("/reqRes",(req,res)=>{
    console.log("reqRes log");
    let reqObj={
        baseUrl : req.baseUrl,
        body:req.body
    }
    res.json(reqObj);
})

route.get("/parameter/:name",(req,res)=>{
    res.send(req.params.name);
})

route.all("/all",(req,res)=>{
    res.send("ALL REQUEST");
})


module.exports=route;