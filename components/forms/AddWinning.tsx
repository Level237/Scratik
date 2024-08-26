'use client'
import React from 'react'
import { Label } from '../ui/label'
import { ImageIcon } from 'lucide-react'

export default function AddWinning() {
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
                <div className='flex flex-col justify-start items-start gap-5 mt-12'>
                    <Label>Mode de remise</Label>
                </div>
      </div>

      <div className='flex items-center flex-col justify-center bg-slate-200 w-80 h-44 rounded-xl'>
            <ImageIcon className='w-16 text-gray-500 h-16'/>
            <h1 className='text-gray-500'>Ajouter une image du lot</h1>
      </div>
            </div>
      <div className='flex mt-8 justify-end'>
      <button  className='bg-[#BE7E00] px-6 py-3'>Ajouter</button>
      </div>

        </form>
     
    </section>
  )
}
