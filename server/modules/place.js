import mongoose, { Schema } from "mongoose";

const skima=mongoose.Schema({
    name: {
        type:String,
    },
    dis: {
        type:String,
    },
    image: {
        type:String,
    }
    
  })

const placekima=mongoose.model("place",skima);

export default placekima;