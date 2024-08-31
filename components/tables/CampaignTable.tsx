"use client"

import { campaign } from "@/data/campaign/campaign";
import { campaignCells } from "@/data/campaign/campaignCell";
import { sales } from "@/data/sales/sales";
import { salesCells } from "@/data/sales/salesCells";
import axios from "axios";
import { Delete, Edit, EditIcon, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function CampaignTable() {
    const CampaignCells=campaignCells;
    const Campaign=campaign
    const [buttonDisable,setButtonDisabled]=React.useState(false)
    const [loading,setLoading]=useState(false)
    const [data,setData]=useState([])
    const getCampaign=async ()=>{
        try {
            
            
            const response=await axios.get("api/campaigns");
            setLoading(false);
            //toast.success('Login Success')
            setData(response.data.data)
            console.log(response.data.data)
            setLoading(false)
        } catch (error:any) {
            console.log("Login Failed",error.message)
        }finally{
            
        }
    }
    useEffect(()=>{
       getCampaign()
       //console.log(loading)
       //setLoading(false)
    },[])
  return (
    <div className="relative mt-8 max-h-96 overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-300 uppercase   dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    {campaignCells.marque}
                </th>
                <th scope="col" className="px-6 py-3">
                {campaignCells.ville}
                </th>
                <th scope="col" className="px-6 py-3">
                   {campaignCells.point}
                </th>
                <th scope="col" className="px-6 py-3">
                {campaignCells.hotesse}
                </th>
                <th scope="col" className="px-6 py-3">
                {campaignCells.periode}
                </th>
                <th scope="col" className="px-6 py-3">
                {campaignCells.number}
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map((campaign)=>{

                return (
                    <tr key={campaign.id} className=" odd:dark:bg-gray-900 text-white even:bg-[#ffffff10] even:dark:bg-gray-800  ">
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                                        {campaign.campaignBrand}
                                    </th>
                                    <td className="px-6 py-4">
                                      {campaign.campaignTown}
                                    </td>
                                    <td className="px-6 py-4">
                                        {campaign.sale}
                                    </td>
                                    <td className="px-6 py-4">
                                       {campaign.hotesse}
                                    </td>
                                    <td className="px-6 py-4">
                                       {campaign.campaignPeriod}
                                    </td>
                                    <td className="px-6 py-4">
                                       {campaign.campaignQuantity}
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
