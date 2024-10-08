import {connect} from "@/db/connect"
import User from "@/models/userModel"
import { NextRequest,NextResponse } from "next/server"
// @ts-ignore
import bcryptjs from 'bcryptjs';



connect()

export async  function POST(request:NextRequest){

    try {
        const reqBody=await request.json();
        const {username,email,password,quarter,address,phone,login,role}=reqBody

        console.log(reqBody)

        //check if user already exist
        const user=await User.findOne({email})

        if(user){
            return NextResponse.json({error:"User already exist"},{status:400})
        }

        //Hash password
        const salt=await bcryptjs.genSalt(10)
        const hashedPassword=await bcryptjs.hash(password,salt)

        const newUser=new User({
            username,
            email,
            quarter,
            address,
            phone,
            login,
            role,
            password:hashedPassword
        })

        const savedUser=await newUser.save()

        console.log(savedUser)

        return NextResponse.json({message:"User created successfully",
        success:true,
        savedUser})


    } catch (error:any) {
        return NextResponse.json({error:error.message})
    }
}