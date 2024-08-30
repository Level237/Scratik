import { connect } from "@/db/connect";
import User from "@/models/userModel";
import Winning from "@/models/winningPriceModel";
import { NextRequest,NextResponse } from "next/server"

connect()

export async function GET(request:NextRequest){
    try {
        const winning=await Winning.find({})

     const response=NextResponse.json({
            data:winning,
            success:true
        })

        return response;
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}

