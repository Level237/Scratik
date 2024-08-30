'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function AddCampaign() {
  const router=useRouter();
  const [buttonDisable,setButtonDisabled]=React.useState(false)
    const [loading,setLoading]=useState(false)
  const [sale,setSale]=React.useState({
    campaignName:"",
    campaignLots:"",
    campaignQuantity:"",
    campaignPrice:"",
    winningPrice:"",
    user:"",
    campaignTown:"",
    campaignPeriod:"",
    campaignDistrict:"",
    ticketNumber:0,
    campaignQuarter:""
  })
  return (
    <section>
        <form action="">
        <div className='flex mb-5 gap-8 items-center justify-between'>
            <div className='flex-1'>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Nom de la campagne' name="" id="" />
                </div>

                <div className='flex-1 flex gap-3 justify-center'>
                <div>
                            <input type="text" className='bg-transparent py-3 px-1 border-b w-36' placeholder="Lots" name="" id="" />
                </div>
                <div>
                            <input type="text" className='bg-transparent py-3 px-1 border-b w-36' placeholder="Quantité" name="" id="" />
                </div>
                </div>
               
      </div>
      <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Définir la marque' name="" id="" />
                </div>

                <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Hotesse en charge' name="" id="" />
                </div>
      </div>
      <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='ville' name="" id="" />
                </div>

                <div>
                            <input type="password" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Période de la campagne' name="" id="" />
                </div>
      </div>

      <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Arrondissement' name="" id="" />
                </div>

                <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Nombre de tickets à gratter' name="" id="" />
                </div>
      </div>
      <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Quartier' name="" id="" />
                </div>
                <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Point de vente' name="" id="" />
                </div>
      </div>
      <div className='flex justify-end'>
      <button  className='bg-[#BE7E00] px-6 py-3'>Ajouter</button>
      </div>

        </form>
     
    </section>
  )
}
