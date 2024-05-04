import mongoose, { Schema } from "mongoose";

const skima=mongoose.Schema({
    userid: {
        type:String,
    },
    image: {
        type:String,
    },
    name: {
        type:String,
    },
    bio: {
        type:String,
    },
    postId: [],
    followers: [],
    following: []
  })

const profileskima=mongoose.model("profile",skima);

export default profileskima;