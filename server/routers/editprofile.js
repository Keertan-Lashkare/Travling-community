import { Router } from "express";
const router=Router();
import S_user from "../modules/user.js";
import jwt from "jsonwebtoken";
import profileskima from "../modules/profile.js";


router.post('/',async (req,res)=>{
    const {tokken}=req.cookies;
    const {usname,usimage,usbio}=req.body;

    console.log("profile page tokken");
    console.log(tokken);
    await profileskima.findOne({userid:tokken}).then((result) => {
         profileskima.updateOne( { name: "John Doe" },{$set:{name:usname,image:usimage,bio:usbio}}).then((result)=>{

                console.log("data updated");
        }).catch(()=>{
            console.log("error occurs during the value updation");
        })

    })


})

export default router;