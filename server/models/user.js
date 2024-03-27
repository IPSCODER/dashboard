import mongoose from "mongoose";

const user = mongoose.Schema({
    username:String,
    email:String,
    password:String,
    id:String
})

export default mongoose.model('user',user)