import { Router } from "express";
import jwt from 'jsonwebtoken';
import S_user from "../modules/user.js";

const router=Router();
router.get('/',async (req,res,next)=>{
    
    const {tokken}=req.cookies;
    console.log("tokken:");
    console.log(tokken);
    if(tokken){
        console.log(tokken);
        try {
            
            const decod=tokken;
            console.log(decod);
           await S_user.findOne({_id:decod}).then((result) => {
        
                if(decod===result._id){
                    console.log("valid user");
                    next();
                }
                
            }) 
            
        } catch (error) {
            res.json({massage:"send to login page",
            error:true,
            
        });
        }
           




        
    }

    
    
})

export default router;
