"use client"

import { UserCells } from "@/data/users/UserCells"
import { users } from "@/data/users/users";
import { winningCells } from "@/data/winning/winningCells";
import { Delete, Edit, EditIcon, Trash } from "lucide-react";

export default function WinningTable() {
    const winningCell=winningCells;
    const Users=users
  return (
    <div className="relative mt-8 max-h-96 overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-300 uppercase   dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    {winningCell.nom}
                </th>
                <th scope="col" className="px-6 py-3">
                {winningCell.quantity}
                </th>
                <th scope="col" className="px-6 py-3">
                   {winningCell.mode}
                </th>
                <th scope="col" className="px-6 py-3">
                {winningCell.photo}
                </th>
               
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {Users.map((user)=>{

                return (
                    <tr key={user.id} className=" odd:dark:bg-gray-900 text-white even:bg-[#ffffff10] even:dark:bg-gray-800  ">
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                                        {user.name}
                                    </th>
                                    <td className="px-6 py-4">
                                      {user.ville}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.quartier}
                                    </td>
                                    <td className="px-6 py-4">
                                       {user.campaign}
                                    </td>
                                    <td className="px-6 py-4">
                                       {user.etat}
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
