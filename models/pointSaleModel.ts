import mongoose, { Schema } from "mongoose";

const pointSaleSchema=new mongoose.Schema({
    quarter:{
        type:String,
        require:[true,"Please provide a quarter"]
    },
    nameSale:{
        type:String,
        require:[true,"Please provide a nameSale"]
    },
    campaignSale:[{
        type:Schema.Types.ObjectId,
        ref:"Campaign"
    }],
    localisation:{
        type:String,
        require:[true,"Please provide a localisation"]
    },
    phoneSale:{
        type:String,
        require:[true,"Please provide a localisation"]
    },
    statutSale:{
        type:String,
        require:[true,"Please provide a statut"],
        default:true,
    },
    typeSale:{
        type:"String",
        require:[true,"Please provide a type"]
    },
    townSale:{
        type:"String",
        require:[true,"Please provide a town"]
    },
    hours:{
        type:String,
        require:[true,"Please provide a hours"]
    }
})

const Sale=mongoose.models.sales || mongoose.model('sales',pointSaleSchema)

export default Sale;