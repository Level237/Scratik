'use client'
import AddWinning from '@/components/forms/AddWinning'
import Modal from '@/components/Modal'
import UserTable from '@/components/tables/UserTable'
import WinningTable from '@/components/tables/WinningTable'
import { Separator } from '@/components/ui/separator'
import { ModalStore } from '@/store/ModalStore'
import { AnimatePresence } from 'framer-motion'
import { Filter } from 'lucide-react'
import React from 'react'

export default function page() {

    const open=ModalStore((set:any)=>set.open)
    
    const isVisible=ModalStore((set:any)=>set.isVisible)
  return (
    <section className='flex flex-col gap-12 flex-1'>

<AnimatePresence>


{isVisible && <Modal title="Ajouter un lot à gagner">
    
    <AddWinning/>
    </Modal>}
</AnimatePresence>
 <section className='flex justify-between'>
        <section className='flex items-start'>
        <div className='flex gap-3'>
        <button onClick={()=>open()} className='bg-[#BE7E00] px-6 py-3'>Ajouter</button>
        <input className='bg-[#ffffff10] px-6 w-52 text-gray-300 placeholder:text-gray-400 
        placeholder:text-md
        ' placeholder='Rechercher' type="text" />
</div>
        </section>
 <section className='flex flex-col justify-between gap-8'>
        
    <div className='flex gap-3'>
        <span className='text-gray-500'>Bienvenue</span>
        <h3 className='text-white text-xl'>Maxime Eboue</h3>
    </div>
</section>

    </section>

    <section>
        <div className='flex justify-between items-center'>
        <div>
            <h3 className='text-lg text-[#BE7E00]'>Listes des lots à gagner</h3>
        </div>
        <div className='flex items-center gap-2'>
            <Filter className='text-gray-500'/>
            <div>
                <h2 className='text-gray-500'>Trier</h2>
            </div>
        </div>
        </div>
        <Separator className='bg-[#BE7E00] mt-5' />
        <WinningTable/>
    </section>
    </section>
   
   
  )
}
