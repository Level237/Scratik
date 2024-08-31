import mongoose, { Schema } from "mongoose";

const CampaignSchema=new mongoose.Schema({


    campaignName:{
        type:String,
        require:[true,'Please provide a campaign name']
    },
    campaignQuantity:{
        type:String,
        require:[true,"Please provide a campaign quantity"]
    },
    campaignBrand:{
        type:String,
        require:[true,"Please provide a campaign brand"]
    },
    sale:{
        type:Schema.Types.ObjectId,
        ref:"Sale"
    },
    winningPrice:{
        type:Schema.Types.ObjectId,
        ref:"Winning"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
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

const Campaign=mongoose.models.Campaign || mongoose.model('Campaign',CampaignSchema)

export default Campaign;