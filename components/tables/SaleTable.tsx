"use client"

import { sales } from "@/data/sales/sales";
import { salesCells } from "@/data/sales/salesCells";
import axios from "axios";
import { Delete, Edit, EditIcon, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function SaleTable() {
    const userCells=salesCells;
    const Sales=sales

    const [buttonDisable,setButtonDisabled]=React.useState(false)
    const [loading,setLoading]=useState(true)
    const [data,setData]=useState([])
    const getSales=async ()=>{
        try {
            
            
            const response=await axios.get("api/sales");
            setLoading(false);
            //toast.success('Login Success')
            setData(response.data.data)
            setLoading(false)
        } catch (error:any) {
            console.log("Login Failed",error.message)
        }finally{
            
        }
    }
    useEffect(()=>{
       getSales()
       //console.log(loading)
       //setLoading(false)
    },[data])
  return (
    <div className="relative mt-8 max-h-96 overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-300 uppercase   dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    {userCells.nom}
                </th>
                <th scope="col" className="px-6 py-3">
                {userCells.quartier}
                </th>
                <th scope="col" className="px-6 py-3">
                   {userCells.phone}
                </th>
                <th scope="col" className="px-6 py-3">
                {userCells.type}
                </th>
                <th scope="col" className="px-6 py-3">
                {userCells.statut}
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map((sale:{
                _id:string,
                quarter:string,
                nameSale:string,
                localisation:string,
                phoneSale:string,
                statutSale:string,
                typeSale:string,
                townSale:string,
                hours:string
            })=>{

                return (
                    <tr key={sale._id} className=" odd:dark:bg-gray-900 text-white even:bg-[#ffffff10] even:dark:bg-gray-800  ">
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                                        {sale.nameSale}
                                    </th>
                                    <td className="px-6 py-4">
                                      {sale.quarter}
                                    </td>
                                    <td className="px-6 py-4">
                                        {sale.phoneSale}
                                    </td>
                                    <td className="px-6 py-4">
                                       {sale.typeSale}
                                    </td>
                                    <td className="px-6 py-4">
                                       {sale.statutSale}
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
    {loading && <div className="flex items-center justify-center mt-16 mb-16" role="status">
    <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
    
</div>}
{data.length===0 && !loading && 
<div className="mt-12 flex items-center justify-center mb-12">
    <h2 className="text-gray-500">Pas de point de vente</h2>
</div>
}
</div>
  )
}
