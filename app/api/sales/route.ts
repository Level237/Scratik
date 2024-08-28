import { connect } from "@/db/connect";
import Sale from "@/models/pointSaleModel";
import { NextRequest,NextResponse } from "next/server"

connect()

export async function GET(request:NextRequest){
    try {
        const sales=await Sale.find({})

     const response=NextResponse.json({
            data:sales,
            success:true
        })

        return response;
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}

