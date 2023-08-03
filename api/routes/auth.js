const router = require("express").Router();
const User = require("../models/User");
const CryptoJS=require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER
// WHEN YOU CREATE SOMETHING USE POST METHOD 
// WHEN YOU UPDATE SOMETHING USE PUT METHOD
// WHEN YOU FETCHING SOME DATA USE GET METHOD
// WHEN YOU DELETE SOME DATA USE DELETE METHOD

router.post('/register', async (req,res) => {

    const newUser= new User({
        // this body refers body from postman
        username:req.body.username,
        email:req.body.email,
      // password:req.body.password,
        password: CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString(),
        // crypto-js module is used to encrypt our simple password into hashcode
    });
    
     // send new user to our database
     try{

        const user =await newUser.save();
        res.status(201).json(user);
     }catch(err){
        res.status(500).json(err);
        console.log(err);
     }
   
})

//login
router.post("/login",async (req,res) =>{

   try{

   const user= await User.findOne({email:req.body.email});

   // if email is not correct than through error
   !user && res.status(401).json("wrong password or username!");

   // else if email is valid then decrypt our password in db which is associted with that email
   var bytes=CryptoJS.AES.decrypt(user.password,process.env.SECRET_KEY);
   const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
   
   // if entered password does not  matches with the decrypted password in db then through error
   originalPassword !== req.body.password && res.status(401).json("wrong password or username!");
   
   // if entered password matches with the original pass word than send response 
   // don't show password to db
    const {password,...info}=user._doc;
   

    const accessToken=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.SECRET_KEY,{expiresIn:"5d"});
    res.status(200).json({...info,accessToken});

   }catch(err)
   {
       res.status(500).json(err);
   }
})




module.exports=router;
