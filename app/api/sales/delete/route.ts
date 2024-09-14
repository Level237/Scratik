import { connect } from "@/db/connect";
import Sale from "@/models/pointSaleModel";
import { NextRequest,NextResponse } from "next/server"

connect()

export async function POST(request:NextRequest){

    try {
        const reqBody=await request.json();
        const {_id}=reqBody;
        console.log(_id)
        const deleteSale=await Sale.deleteOne({_id})
        //redirect(`/users`);
        
        return NextResponse.json({message:"sale delete successfully",
        success:true,
        deleteSale},{status:200})
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}