const jwt=require("jsonwebtoken");

// verify funtion will acts as middleware
const verify = (req,res,next) =>{
     // here we will get jwt token through header

     const authHeader=req.headers.token;
     if(authHeader){
           // we have to sepate the Bearer and jwt token 
           const token = authHeader.split(" ")[1];
           jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
                if(err) res.status(403).json("token is not valid");
                req.user=user;
                // call the actual router
                next();
           });
     }
     else{
        return res.status(401).json("you are not authenticated");
     }



}

module.exports = verify;