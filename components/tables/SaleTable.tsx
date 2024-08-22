"use client"

import { sales } from "@/data/sales/sales";
import { salesCells } from "@/data/sales/salesCells";
import { Delete, Edit, EditIcon, Trash } from "lucide-react";

export default function SaleTable() {
    const userCells=salesCells;
    const Sales=sales
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
            {Sales.map((sale)=>{

                return (
                    <tr key={sale.id} className=" odd:dark:bg-gray-900 text-white even:bg-[#ffffff10] even:dark:bg-gray-800  ">
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                                        {sale.nom}
                                    </th>
                                    <td className="px-6 py-4">
                                      {sale.quartier}
                                    </td>
                                    <td className="px-6 py-4">
                                        {sale.phone}
                                    </td>
                                    <td className="px-6 py-4">
                                       {sale.type}
                                    </td>
                                    <td className="px-6 py-4">
                                       {sale.statut}
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
