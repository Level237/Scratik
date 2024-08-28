import { connect } from "@/db/connect";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server"

connect()

export async function GET(request:NextRequest){
    try {
        const users=await User.find({})

     const response=NextResponse.json({
            data:users,
            success:true
        })

        return response;
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}

