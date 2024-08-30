import {connect} from "@/db/connect"
import Winning from "@/models/winningPriceModel"
import { NextRequest,NextResponse } from "next/server"




connect()

export async  function POST(request:NextRequest){

    try {
        const reqBody=await request.json();
        const {nameWinning,quantity,mode,image}=reqBody
        
        if(!image){
            return NextResponse.json({success:false})
        }
        
        //console.log(reqBody)

        //Hash password
        

        const newWinning=new Winning({
           nameWinning,
           quantity,
           mode,
           image
        })

        const savedWinning=await newWinning.save()

       

        return NextResponse.json({message:"Winning created successfully",
        success:true,
        savedWinning})


    } catch (error:any) {
        console.log(error)
        return NextResponse.json({error:error.message},{status:500})
    }
}