import React from 'react'
import { Separator } from '../ui/separator'

export default function Settings() {
  return (
    <section className='flex flex-col gap-16'>
      <section className='flex items-center justify-between'>
        
          <div className='flex-col gap-3 mt-8 flex'>
          <div className='flex flex-col gap-4'> 
          <div>
              <h2 className='text-white'>Ville</h2>
            </div>
            <div className='flex items-center gap-2'>
              <input placeholder='Entrez une ville' type="text" className='bg-[#be7f0050] px-3 py-3 placeholder:text-gray-400 rounded-md' />
              <button   className='bg-[#BE7E00] px-3 py-3 text-white rounded-md'>Ajouter</button>
            </div>
            </div>
            <div className='flex-col gap-3 flex'>
            <Separator className='bg-gray-500 mt-5' />
            <h2 className='text-gray-400'>20 villes ajoutées</h2>
            <Separator className='bg-gray-500' />
            </div>
          </div>
          <div className='flex-col gap-3 mt-8 flex'>
          <div className='flex flex-col gap-4'> 
          <div>
              <h2 className='text-white'>Arrondissement</h2>
            </div>
            <div className='flex items-center gap-2'>
              <input placeholder='Entrez un arrondissement' type="text" className='bg-[#be7f0050] px-3 py-3 placeholder:text-gray-400 rounded-md' />
              <button   className='bg-[#BE7E00] px-3 py-3 text-white rounded-md'>Ajouter</button>
            </div>
            </div>
            <div className='flex-col gap-3 flex'>
            <Separator className='bg-gray-500 mt-5' />
            <h2 className='text-gray-400'>20 Arrondissements ajoutées</h2>
            <Separator className='bg-gray-500' />
            </div>
          </div>
      </section>
      <section className='flex items-center justify-between'>
        
        <div className='flex-col gap-3 mt-8 flex'>
        <div className='flex flex-col gap-4'> 
        <div>
            <h2 className='text-white'>Quartier</h2>
          </div>
          <div className='flex items-center gap-2'>
            <input placeholder='Entrez un quartier' type="text" className='bg-[#be7f0050] px-3 py-3 placeholder:text-gray-400 rounded-md' />
            <button   className='bg-[#BE7E00] px-3 py-3 text-white rounded-md'>Ajouter</button>
          </div>
          </div>
          <div className='flex-col gap-3 flex'>
          <Separator className='bg-gray-500 mt-5' />
          <h2 className='text-gray-400'>20 quartiers ajoutées</h2>
          <Separator className='bg-gray-500' />
          </div>
        </div>
        
    </section>
    </section>
  )
}
