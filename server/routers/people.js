import { Router } from "express";
const router=Router();
import postskima from "../modules/post.js";
import profileskima from "../modules/profile.js";



router.post('/',async (req,res)=>{
    console.log("this is people serch api");
    const {pname}=req.body;
    
    await profileskima.find({name:pname}).then((result) => {
  
        res.json(result);
        
    }).catch((err) => {

        res.json({result:false,massage:"people not found"});

        
    });


})

export default router;