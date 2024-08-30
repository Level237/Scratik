import mongoose from "mongoose";

const winningPriceSchema=new mongoose.Schema({

    nameWinning:{
        type:String,
        require:[true,"Please provide a name of Winning"]
    },
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

const Winning=mongoose.models.winnings || mongoose.model('winnings',winningPriceSchema)

export default Winning;