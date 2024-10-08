import {connect} from "@/db/connect"
import { NextRequest,NextResponse } from "next/server"
// @ts-ignore
import bcryptjs from 'bcryptjs';
import SuperAdmin from "@/models/SuperAdmin";



connect()

export async  function POST(request:NextRequest){

    try {
        const reqBody=await request.json();
        const {username,email,password}=reqBody

        console.log(reqBody)

        //check if user already exist
        const user=await SuperAdmin.findOne({email})

        if(user){
            return NextResponse.json({error:"User already exist"},{status:400})
        }

        //Hash password
        const salt=await bcryptjs.genSalt(10)
        const hashedPassword=await bcryptjs.hash(password,salt)

        const newUser=new SuperAdmin({
            username,
            email,
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