let checkAuthMiddleWare=function(req,res,next){
    if(req.query.auth=='true'){
        req.isAuthenticated = true;
        res.send("Welcome to blog");
        next();
    }
    else{
        res.send("Not authenticated");
    }
}

module.exports=checkAuthMiddleWare;