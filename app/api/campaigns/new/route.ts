import {connect} from "@/db/connect"
import Campaign from "@/models/campaignModel"
import { NextRequest,NextResponse } from "next/server"




connect()

export async  function POST(request:NextRequest){

    try {
        const reqBody=await request.json();
        const {campaignName,
            campaignLots,
            campaignQuantity,
            winningPrice,
            user,
            campaignTown,
            campaignPeriod,
            campaignQuarter
        }=reqBody

        console.log(reqBody)

       

        //Hash password
        

        const newCampaign=new Campaign({
            campaignName,
            campaignLots,
            campaignQuantity,
            winningPrice,
            user,
            campaignTown,
            campaignPeriod,
            campaignQuarter
        })

        const savedCampaign=await newCampaign.save()

        return NextResponse.json({message:"Campaign created successfully",
        success:true,
        savedCampaign})


    } catch (error:any) {
        return NextResponse.json({error:error.message})
    }
}