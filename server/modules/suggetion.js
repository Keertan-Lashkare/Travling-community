import mongoose, { Schema } from "mongoose";

const skima=mongoose.Schema({
    image: {
        type:String,
    },
    place: {
        type:String,
    },
    about: {
        type:String,
    },
    userid:{
        type:String,
    },
    inpute: {
        type:String,
    }
  })

const suggetionskima=mongoose.model("suggetion",skima);

export default suggetionskima;