let myLogger=function(req,res,next){
    console.log("Welcome to myLogger");
    next();
}

module.exports=myLogger;