import {connect} from "@/db/connect"
import Winning from "@/models/winningPriceModel"
import { NextRequest,NextResponse } from "next/server"




connect()

export async  function POST(request:NextRequest){

    try {
        const reqBody=await request.json();
        const {nameWinning,quantity,mode,image}=reqBody

        console.log(reqBody)

       

        //Hash password
        

        const newWinning=new Winning({
           nameWinning,
           quantity,
           mode,
           image
        })

        const savedWinning=await newWinning.save()

       

        return NextResponse.json({message:"User created successfully",
        success:true,
        savedWinning})


    } catch (error:any) {
        return NextResponse.json({error:error.message})
    }
}