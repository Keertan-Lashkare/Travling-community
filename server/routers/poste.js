import { Router } from "express";
const router=Router();
import S_user from "../modules/user.js";
import postskima from "../modules/post.js";

router.post('/',async (req,res)=>{
    console.log("this is journy page");
    const {tokken}=req.cookies;
    
    await postskima.find({userId:tokken}).then((result) => {
       
        
        
        res.json(result);
       
        
           
        
    }).catch((err) => {

        res.json({result:false,massage:"joruny is not found"});

        
    });


})

export default router;