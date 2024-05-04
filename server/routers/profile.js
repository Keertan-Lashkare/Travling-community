import { Router } from "express";
import profileskima from "../modules/profile.js";

const router=Router();
router.post("/",async (req,res)=>{
    const {tokken}=req.cookies;
    console.log("profile page tokken");
    console.log(tokken);
    await profileskima.findOne({userid:tokken}).then((result) => {
        res.json({
            image:result.image,
            name:result.name,
            bio:result.bio,
            follower:result.followers,
            following:result.following,
            result:true
        })
        console.log("profile display data");

    })

})


export default router;