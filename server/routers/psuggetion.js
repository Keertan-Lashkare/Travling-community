import { Router } from "express";
const router=Router();
import S_user from "../modules/user.js";
import placekima from "../modules/place.js";


router.post('/',async (req,res)=>{
    
    const {placename,placeimg,placedes}=req.body;
    
    await  placekima.create({name:placename,image:placeimg,des:placedes}).then((result) => {
        console.log(result.id);
        console.log("place inserted succefully");
       
        
           
        
    }).catch((err) => {

        res.json({result:false,massage:"place not inserted"});

        
    });


})

export default router;