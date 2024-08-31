import {connect} from "@/db/connect"
import Campaign from "@/models/campaignModel"
import Sale from "@/models/pointSaleModel";
import User from "@/models/userModel";
import Winning from "@/models/winningPriceModel";
import { NextRequest,NextResponse } from "next/server"




connect()

export async  function POST(request:NextRequest){

    try {
        const reqBody=await request.json();
        const {campaignName,
            campaignQuantity,
            winningPrice,
            campaignBrand,
            user,
            sale,
            ticketNumber,
            campaignTown,
            campaignDistrict,
            campaignPeriod,
            campaignQuarter
        }=reqBody

        const userCampaign = await User.findById(user);
        const saleCampaign = await Sale.findById(sale);
        const winningCampaign = await Winning.findById(winningPrice);

        console.log(reqBody)

       

        //Hash password
        

        const newCampaign=new Campaign({
            campaignName,
            winningPrice:winningCampaign,
            campaignQuantity,
            campaignBrand,
            user:userCampaign,
            sale:saleCampaign,
            campaignTown,
            ticketNumber,
            campaignDistrict,
            campaignPeriod,
            campaignQuarter
        })

        const savedCampaign=await newCampaign.save()

        userCampaign.campaigns.push(newCampaign)
        await userCampaign.save()
        saleCampaign.campaigns.push(newCampaign)
        await saleCampaign.save()
        winningCampaign.campaigns.push(newCampaign)
        await winningCampaign.save()
        return NextResponse.json({message:"Campaign created successfully",
        success:true,
        savedCampaign})


    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}