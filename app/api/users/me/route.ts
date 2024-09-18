import { getDataFromToken } from "@/helpers/getDataToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/db/connect";
import SuperAdmin from "@/models/SuperAdmin";


connect()

export async function GET(request:NextRequest){
    try {
        const userId=await getDataFromToken(request);
        const admin=await SuperAdmin.findOne({_id:userId}).select("-password")

        return NextResponse.json(
            {
                message:"User found",
                data:admin,
                admin:1
    })
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:400})
    }
}