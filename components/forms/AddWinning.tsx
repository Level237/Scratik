'use client'
import React, { useState } from 'react'
import { Label } from '../ui/label'
import { ImageIcon } from 'lucide-react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';

export default function AddWinning() {

  const router=useRouter();
  const [buttonDisable,setButtonDisabled]=React.useState(false)
    const [loading,setLoading]=useState(false)
  const [winning,setWinning]=React.useState({
    nameWinning:"",
    quantity:"",
    mode:"",
    image:"",
  })

  const createWinning=async ()=>{
    try {
        setLoading(true)
        const response:any=await axios.post('/api/winning/new',winning)
        console.log(response)
        //router.push("/sales")
    } catch (error:any) {
      console.log(error)
        //console.log("Signup failed",error.message)
        //toast.error(error.message)
    }finally{
        setLoading(false)
    }
}
  return (
    <section>
        <form action="">
            <div className='flex gap-8 justify-between items-center'>
            <div className='flex flex-col mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Nom du lot' name="" id="" />
                </div>

                <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Quantité' name="" id="" />
                </div>
                <div className='flex mt-12'>
                    <Label>Mode de remise</Label>
                </div>
                <div className='flex items-center justify-start gap-2 mt-4'>
                <input type="radio" className='bg-transparent py-1 px-3 border-b w-3'  name="mode" id="point de vente" />
                <label >Dans un point de vente</label>
                </div>
                <div className='flex items-center justify-start gap-2 mt-4'>
                <input type="radio" className='bg-transparent py-1 px-3 border-b w-3' placeholder='Quantité' name="mode" id="centre de distribution" />
                <label >Dans un centre de distribution</label>
                </div>
      </div>

      <label  className="flex cursor-pointer items-center flex-col justify-center bg-slate-200 w-80 h-44 rounded-xl">
      <ImageIcon className='w-16 text-gray-500 h-16'/>
   <div className="space-y-2">
      <h4 className="text-base font-semibold text-gray-700">Upload a file</h4>
      <span className="text-sm text-gray-500">Max 2 MO</span>
   </div>
   <input type="file" id="doc" name="doc" accept="png, jpg" hidden/>
</label>
            </div>
      <div className='flex mt-8 justify-end'>
      <button  className='bg-[#BE7E00] px-6 py-3'>Ajouter</button>
      </div>

        </form>
     
    </section>
  )
}
