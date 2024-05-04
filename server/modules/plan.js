import mongoose, { Schema } from "mongoose";

const skima=mongoose.Schema({
    username:{
        type:String,
    },
    image: {
        type:String,
    },
    createDate:{
        type:String,
    },
    endDate: {
        type:String,
    },
    joins: [],
    plan: {
        type:String,
    }
  })

const planskima=mongoose.model("plan",skima);

export default planskima;