import { NextRequest } from "next/server";
// @ts-ignore
import jwt from 'jsonwebtoken'

export const getDataFromToken=(request:NextRequest)=>{
    try {
        const token=request.cookies.get('tokenSupervisor')?.value || ''
        const decodeToken:any=jwt.verify(token,process.env.TOKEN_SECRET!)
        return decodeToken.id;
    } catch (error:any) {
        throw new Error(error.message)
    }
}