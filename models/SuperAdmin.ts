import mongoose from "mongoose";

const SuperAdminSchema=new mongoose.Schema({
    username:{
        type:String,
        require:[true,"Please provide a username"],
        unique:true,
    },
    email:{
        type:String,
        require:[true,"Please provide a email"],
        unique:true
    },
    password:{
        type:String,
        require:[true,"Please provide a password"]
    },
})

const SuperAdmin=mongoose.models.users || mongoose.model('superAdmin',SuperAdminSchema)

export default SuperAdmin;