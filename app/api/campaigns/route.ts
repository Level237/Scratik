import { connect } from "@/db/connect";
import Campaign from "@/models/campaignModel";
import Sale from "@/models/pointSaleModel";
import { NextRequest,NextResponse } from "next/server"

connect()

export async function GET(request:NextRequest){
    try {
        const campaign=await Campaign.find()
        .populate('user')
        .populate('sale')
        .populate('winningPrice')
        

     const response=NextResponse.json({
            data:campaign,
            success:true
        })

        return response;
    } catch (error:any) {
        console.log(error)
        return NextResponse.json({error:error.message},{status:500})
    }
}

