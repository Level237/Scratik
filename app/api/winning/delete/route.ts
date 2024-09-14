import { connect } from "@/db/connect";
import { NextRequest,NextResponse } from "next/server"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import Winning from "@/models/winningPriceModel";
connect()

export async function POST(request:NextRequest){

    try {
        const reqBody=await request.json();
        const {_id}=reqBody;
        console.log(_id)
        const deleteWinning=await Winning.deleteOne({_id})
        //redirect(`/users`);
        
        return NextResponse.json({message:"User delete successfully",
        success:true,
        deleteWinning},{status:200})
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}