import { getDataFromToken } from "@/helpers/getDataToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/db/connect";
import SuperAdmin from "@/models/SuperAdmin";
import { getDataFromTokenSupervisor } from "@/helpers/getDataTokenSupervisor";


connect()

export async function GET(request:NextRequest){
    try {
        const userId=await getDataFromTokenSupervisor(request);
        const admin=await User.findOne({_id:userId}).select("-password")

        if(admin){
            return NextResponse.json(
                {
                    message:"User found",
                    data:admin
        })
        }else{
            return NextResponse.json(
                {
                    message:"User not found",
        })
        }
       
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:400})
    }
}