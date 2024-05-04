import { Router } from "express";
import S_user from "../modules/user.js";
import jwt from "jsonwebtoken";
import profileskima from "../modules/profile.js";
const router=Router();
router.post('/',(req,res)=>{
    const {username,password,email}=req.body;
    console.log(username);
    console.log(password);
    console.log(email);
    
    const fin=S_user.findOne({username:username}).then((ress)=>{
        if(!ress){
            S_user.create({username:username,password:password,email:email}).then((result)=>{

                profileskima.create({userid:result.id,name:result.username,image:'',bio:'',postId:[],followers:[],following:[]}).then((data)=>{
                    console.log("profile is created");
                }).catch((error)=>{
                    console.log("there are somthing wrong with creating profille");
                })

               console.log(result.id);
                
               res.cookie("tokken",result.id,{
                
                expires:new Date(Date.now()+60*100)
               })
               res.end();
        }).catch((error)=>{
            res.json({result:false,massage:"someting whent wrong"})
        })
        }
        if(ress){

            res.json({
                result:false,
            massage:"user is alrady exist"
        })
        }
         
        
        
        

    })
    
   
        
    

        
        
    
})

export default router;
