import mongoose, { Schema } from "mongoose";

const CampaignSchema=new mongoose.Schema({


    campaignName:{
        type:String,
        require:[true,'Please provide a campaign name']
    },
    campaignLots:{
        type:String,
        require:[true,"Please provide a campaign lots"]
    },
    campaignQuantity:{
        type:String,
        require:[true,"Please provide a campaign quantity"]
    },
    campaignBrand:{
        type:String,
        require:[true,"Please provide a campaign brand"]
    },
    winningPrice:{
        type:Schema.Types.ObjectId,
        ref:"Winning"
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    campaignTown:{
        type:String,
        require:[true,"Please provide a town"]
    },
    campaignPeriod:{
        type:String,
        require:[true,"Please provide a period"]
    },
    campaignDistrict:{
        type:String,
        require:[true,"Please provide a district"]
    },
    ticketNumber:{
        type:Number,
        require:[true,"Please provide a ticket"]
    },
    campaignQuarter:{
        type:String,
        require:[true,"Please provide a quarter"]
    }
})

const Campaign=mongoose.models.campaign || mongoose.model('campaigns',CampaignSchema)

export default Campaign;