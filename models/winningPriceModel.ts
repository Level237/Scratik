import mongoose, { Schema } from "mongoose";

const winningPriceSchema=new mongoose.Schema({

    nameWinning:{
        type:String,
        require:[true,"Please provide a name of Winning"]
    },
    campaignWinning:[{
        type:Schema.Types.ObjectId,
        ref:"Campaign"
    }],
    quantity:{
        type:Number,
        require:[true,"Please provide a quantity"]
    },
    mode:{
        type:String,
        require:[true,"Please provide a mode"]
    },
    image:{
        type:String,
        require:[true,"Please provide a image"]
    }
})

const Winning=mongoose.models.Winning || mongoose.model('Winning',winningPriceSchema)

export default Winning;