import { connect } from "@/db/connect";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
connect()

export async function POST(request:NextRequest){

    try {
        const reqBody=await request.json();
        const {_id}=reqBody;
        console.log(_id)
        const deleteUser=await User.deleteOne({_id})
        //redirect(`/users`);
        
        return NextResponse.json({message:"User delete successfully",
        success:true,
        deleteUser},{status:200})
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}