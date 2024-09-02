'use client'
import AddUser from '@/components/forms/AddUser'
import Modal from '@/components/Modal'
import Settings from '@/components/settings/settings'
import UserTable from '@/components/tables/UserTable'
import { Separator } from '@/components/ui/separator'
import { ModalStore } from '@/store/ModalStore'
import { AnimatePresence } from 'framer-motion'
import { Filter } from 'lucide-react'
import React from 'react'

export default function page() {

    
  return (
    <section className='flex flex-col gap-12 flex-1'>
       
 <section className='flex justify-between'>
        <section className='flex items-start'>
        
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
            <h3 className='text-lg text-[#BE7E00]'>Paramètres</h3>
        </div>
        <div className='flex items-center gap-2'>
           
        </div>
        </div>
        <Separator className='bg-[#BE7E00] mt-5' />
        <Settings/>
    </section>
    </section>
   
   
  )
}
