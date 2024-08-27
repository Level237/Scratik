'use client'
import React from 'react'

export default function AddUser() {
  return (
    <section>
        <form action="">
        <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Nom et Prénoms' name="" id="" />
                </div>

                <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Quartier' name="" id="" />
                </div>
      </div>
      <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Email' name="" id="" />
                </div>

                <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Adresse' name="" id="" />
                </div>
      </div>
      <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Numéro de téléphone' name="" id="" />
                </div>

                <div>
                            <input type="password" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Mot de passe' name="" id="" />
                </div>
      </div>

      <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='login' name="" id="" />
                </div>

                <div>
                  <select className='bg-transparent py-3 px-3 border-b w-52' name="" id="">
                    <option value="">Role</option>
                    <option value="hotesse">Hotesse</option>
                    <option value="hotesse">Superviseur</option>
                  </select>
                            
                </div>
      </div>
      <div className='flex justify-end'>
      <button  className='bg-[#BE7E00] px-6 py-3'>Ajouter</button>
      </div>

        </form>
     
    </section>
  )
}
