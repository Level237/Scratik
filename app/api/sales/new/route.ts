import {connect} from "@/db/connect"
import Sale from "@/models/pointSaleModel"
import { NextRequest,NextResponse } from "next/server"




connect()

export async  function POST(request:NextRequest){

    try {
        const reqBody=await request.json();
        const {quarter,nameSale,localisation,phoneSale,statutSale,typeSale,townSale,hours}=reqBody

        console.log(reqBody)

       

        //Hash password
        

        const newSale=new Sale({
            quarter,
            nameSale,
            localisation,
            phoneSale,
            statutSale,
            typeSale,
            townSale,
            hours
        })

        const savedSale=await newSale.save()

       

        return NextResponse.json({message:"sale created successfully",
        success:true,
        savedSale})


    } catch (error:any) {
        return NextResponse.json({error:error.message})
    }
}