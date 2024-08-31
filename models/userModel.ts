import mongoose, { Schema } from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:[true,"Please provide a username"],
        unique:true,
    },
    quarter:{
        type:String,
        require:[true,"Please provide a quarter"],
    },
    address:{
        type:String,
        require:[true,"Please provide a address"],
    },
    email:{
        type:String,
        require:[true,"Please provide a email"],
        unique:true
    },
    phone:{
        type:String,
        require:[true,"Please provide a phone"],
    },
    login:{
        type:String,
        require:[true,"Please provide a login"],
        unique:true,
    },
    campaignUser:[{
        type:Schema.Types.ObjectId,
        ref:"Campaign"
    }],
    password:{
        type:String,
        require:[true,"Please provide a password"]
    },
    role:{
        type:String,
        require:[true,"Please provide a role"]
    },
})

const User=mongoose.models.users || mongoose.model('users',userSchema)

export default User;