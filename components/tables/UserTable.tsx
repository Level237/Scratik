"use client"

import { UserCells } from "@/data/users/UserCells"
import { users } from "@/data/users/users";
import axios from "axios";
import { Delete, Edit, EditIcon, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function UserTable() {
    const userCells=UserCells;
    const router=useRouter();
    //const Users=users
    const [buttonDisable,setButtonDisabled]=React.useState(false)
    const [loading,setLoading]=useState(false)
    const [data,setData]=useState([])
    const getUsers=async ()=>{
        try {
            setLoading(true);
            const response=await axios.post("api/users");
            //toast.success('Login Success')
            setData(response.data.data)
        } catch (error:any) {
            console.log("Login Failed",error.message)
        }finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
       getUsers()
    },[data])
  return (
    <div className="relative mt-8 max-h-96 overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-300 uppercase   dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    {userCells.name}
                </th>
                <th scope="col" className="px-6 py-3">
                {userCells.login}
                </th>
                <th scope="col" className="px-6 py-3">
                   {userCells.ville}
                </th>
                <th scope="col" className="px-6 py-3">
                {userCells.quartier}
                </th>
                <th scope="col" className="px-6 py-3">
                {userCells.state}
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map((user:{
                _id:string,
                username:string,
                login:string,
                quarter:string,
                role:string,
            })=>{

                return (
                    <tr key={user._id} className=" odd:dark:bg-gray-900 text-white even:bg-[#ffffff10] even:dark:bg-gray-800  ">
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                                        {user.username}
                                    </th>
                                    <td className="px-6 py-4">
                                      {user.login}
                                    </td>
                                    <td className="px-6 py-4">
                                        douala
                                    </td>
                                    <td className="px-6 py-4">
                                       {user.quarter}
                                    </td>
                                    <td className="px-6 py-4">
                                       {user.role}
                                    </td>
                                    <td className="px-6 py-4 flex gap-3">
                                        <EditIcon className="h-5 w-5 text-gray-500"/>
                                        <Trash className="h-5 w-5 text-gray-500"/>
                                    </td>
                    </tr>
                )
            })}
            
           
        </tbody>
    </table>
</div>
  )
}
