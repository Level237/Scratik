import { connect } from "@/db/connect";
import User from "@/models/userModels";
import { NextRequest,NextResponse } from "next/server"

// @ts-ignore
import bcryptjs from 'bcryptjs';
// @ts-ignore
import jwt from "jsonwebtoken"

connect()

export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json()
        const {email,password}=reqBody

        const user=await User.findOne({email})

        if(!user){
            return NextResponse.json({error:"User does not exist"},{status:400})
        }

        const validatePassword=bcryptjs.compare(password,user.password)

        const tokenData={
            id:user._id,
            login:user.login,
            email:user.email
        }

        const token=await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1d"})

        const response=NextResponse.json({
            message:"Login Successfully",
            success:true
        })

        response.cookies.set('token',token,{httpOnly:true})

        return response;
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}

