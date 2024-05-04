import mongoose, { Schema } from "mongoose";

const skima=mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }

    
    
})

const S_user=mongoose.model("user",skima);

export default S_user;