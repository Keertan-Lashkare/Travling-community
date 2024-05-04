import { Router } from "express";
const router=Router();
import S_user from "../modules/user.js";
import jwt from "jsonwebtoken";


router.post('/',async (req,res)=>{
    console.log("this is login page");
    const {user,pass}=req.body;
    
    await S_user.findOne({username:user,password:pass}).then((result) => {
        console.log(result.id);
        
        
        try {
 
            
            res.cookie('tokken',result.id,{
                 
                expires:new Date(Date.now()+60*1000)
               }).json({result:true,massage:"valide candidate"});
            
            
        } catch (error) {
            res.json({result:false,massage:"invalide username and passwored"});
        }
       
        
           
        
    }).catch((err) => {

        res.json({result:false,massage:"invalide username and passwored"});

        
    });


})

export default router;