'use client'
import React from 'react'

export default function AddSale() {
  return (
    <section>
        <form action="">
        <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Quartier' name="" id="" />
                </div>

                <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder="Horaire d'ouverture" name="" id="" />
                </div>
      </div>
      <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Nom du point de vente' name="" id="" />
                </div>

                <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Localisation exacte' name="" id="" />
                </div>
      </div>
      <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Numéro de téléphone' name="" id="" />
                </div>

                <div>
                            <input type="password" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Statut' name="" id="" />
                </div>
      </div>

      <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Type de point de vente' name="" id="" />
                </div>

                <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Ville' name="" id="" />
                </div>
      </div>
      <div className='flex justify-end'>
      <button  className='bg-[#BE7E00] px-6 py-3'>Ajouter</button>
      </div>

        </form>
     
    </section>
  )
}
