'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function AddSale() {
  const router=useRouter();
  const [buttonDisable,setButtonDisabled]=React.useState(false)
    const [loading,setLoading]=useState(false)
  const [sale,setSale]=React.useState({
    quarter:"",
    nameSale:"",
    localisation:"",
    phoneSale:"",
    statutSale:"",
    typeSale:"",
    townSale:"",
    hours:""
  })

  const createSale=async ()=>{
    try {
        setLoading(true)
        const response:any=await axios.post('/api/sales/new',sale)
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
        <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Quartier' name="" id="" 
                            value={sale.quarter}
                            onChange={(e)=>setSale({...sale,quarter:e.target.value})}
                            />
                </div>

                <div>
                            <input type="time" className='bg-transparent py-3 px-3 border-b w-full' placeholder="Horaire d'ouverture" name="" id=""
                             value={sale.hours}
                             onChange={(e)=>setSale({...sale,hours:e.target.value})}
                            />
                </div>
      </div>
      <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Nom du point de vente' name="" id=""
                             value={sale.nameSale}
                             onChange={(e)=>setSale({...sale,nameSale:e.target.value})}
                            />
                </div>

                <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Localisation exacte' name="" id=""
                             value={sale.localisation}
                             onChange={(e)=>setSale({...sale,localisation:e.target.value})}
                            />
                </div>
      </div>
      <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Numéro de téléphone' name="" id="" 
                             value={sale.phoneSale}
                             onChange={(e)=>setSale({...sale,phoneSale:e.target.value})}
                            />
                </div>

                <div>
                  <select className='bg-transparent py-3 px-3 border-b w-52' name="" id=""
                  onChange={(e)=>{
                    
                      setSale({...sale,statutSale:e.target.value})
                  }}
                  
                  >
                    <option value="">Statut</option>
                    <option value="ouvert">Ouvert</option>
                    <option value="fermé">Fermé</option>
                  </select>
                            
                </div>
      </div>

      <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Type de point de vente' name="" id=""
                            
                            value={sale.typeSale}
                            onChange={(e)=>setSale({...sale,typeSale:e.target.value})}/>
                </div>

                <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Ville' name="" id="" 
                             value={sale.townSale}
                             onChange={(e)=>setSale({...sale,townSale:e.target.value})}
                            />
                </div>
      </div>
      <div className='flex justify-end'>
      <button  onClick={createSale} className='bg-[#BE7E00] px-6 py-3'>Ajouter</button>
      </div>

        </form>
     
    </section>
  )
}
