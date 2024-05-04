import mongoose, { Schema } from "mongoose";

const skima=mongoose.Schema({
    userId: {
        type:String,
    },
    username: {
        type:String,
    },
    experience: {
        type:String,
    },
    mentions: [],
    image:{
        type:String,
    }
  })

const postskima=mongoose.model("post",skima);

export default postskima;