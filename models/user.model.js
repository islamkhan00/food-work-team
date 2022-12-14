import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
    mobile:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:false
    }
})
const User = mongoose.model("users", UserShema);
export default User;