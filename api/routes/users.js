const router = require("express").Router();
const User = require('../models/User');
const CryptoJS=require("crypto-js");
const verify = require("../verifyToken");



// crud operations
// upadate

router.put("/:id",verify ,async (req,res) => {
     if(req.user.id=== req.params.id || req.user.isAdmin){
           if(req.body.password)
           {
           req.body.password = CryptoJS.AES.decrypt(user.password,process.env.SECRET_KEY).toString();
           }
     
        try{
        
             const updateUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{new :true});

            res.status(200).json(updateUser);
        }catch(err)
        {
            res.status(500).json(err);
        }
    }
    else {
        res.status(403).json("you can update only your account! ")
    }
})


// delete

router.delete("/:id",verify ,async (req,res) => {
    if(req.user.id=== req.params.id || req.user.isAdmin){

       try{
       
            await User.findByIdandDelete(req.params.id);
            res.status(200).json("User has been deleted...");
       }catch(err)
       {
           res.status(500).json(err);
       }
   }
   else {
       res.status(403).json("you can can only your account! ")
   }
})


// get
router.get("/find/:id",async (req,res) => {
   
       try{
       
          const user = await User.findById(req.params.id);
           const {password,...info}=user._doc;
           // don't set password to all of them 
           res.status(200).json(info);
       }catch(err)
       {
           res.status(500).json(err);
       }
  
})

// getall

router.get("/",verify ,async (req,res) => {

    const query=req.query.new;

    if(req.user.isAdmin){

       try{
       
            const users = query? await User.find().sort({_id:-1}).limit(5) : await User.find();
            res.status(200).json(users);
       }catch(err)
       {
           res.status(500).json(err);
       }
   }
   else {
       res.status(403).json("you are not allowed to see whole users! ")
   }
})


// get user stats like in junary we 4 million user or etc;

router.get("/stats",async (req,res) =>{
    const today= new Date();
    const lastYear= today.setFullYear(today.setFullYear()-1);

    //  const monthsArray=["January","February","March","April","May","June","July","August","September","October","November","December",];

     try{
         const data=await User.aggregate([
            {
                $project:{
                    // this funtion is related to our mongodb 
                    // it will send the month at which the user is created 
                    // similarly to get the year you can use $year
                    month:{$month:"$createdAt"}
                }
            },{
               $group :{
                _id:"$month",
                total:{$sum:1}
               } 
            }
        ]);

         res.status(200).json(data);
     }catch(err){
        res.status(500).json(err);
     }
})






module.exports=router;