'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function AddCampaign() {
  const router=useRouter();
  const [buttonDisable,setButtonDisabled]=React.useState(false)
    const [loading,setLoading]=useState(false)
    const [data,setData]=useState([])
    const [dataSale,setDataSale]=useState([])
    const [dataWin,setDataWin]=useState([])

  const [campaign,setCampaign]=React.useState({
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

  const getWinning=async ()=>{
    try {
        
        
        const response=await axios.get("api/winning");
        setLoading(false);
        //toast.success('Login Success')
        setDataWin(response.data.data)
        setLoading(false)
    } catch (error:any) {
        console.log("Login Failed",error.message)
    }finally{
        
    }
}
  const getHotesse=async ()=>{
    try {
        
        
        const response=await axios.get("api/users/byrole");
        setLoading(false);
        //toast.success('Login Success')
        console.log(response.data.data)
        setData(response.data.data)
        setLoading(false)
    } catch (error:any) {
        console.log("Login Failed",error.message)
    }finally{
        
    }
}
const getSales=async ()=>{
  try {
      
      
      const response=await axios.get("api/sales");
      setLoading(false);
      //toast.success('Login Success')
      setDataSale(response.data.data)
      setLoading(false)
  } catch (error:any) {
      console.log("Login Failed",error.message)
  }finally{
      
  }
}

useEffect(()=>{
   getHotesse()
   getWinning()
   //console.log(loading)
   //setLoading(false)
},[data,dataWin])

  return (
    <section>
        <form action="">
        <div className='flex mb-5 gap-8 items-center justify-between'>
            <div className='flex-1'>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Nom de la campagne' name="" id="" />
                </div>

                <div className='flex-1 flex gap-3 justify-center'>
                <div>
                  <select className='bg-transparent py-3 px-3 border-b w-52' name="" id=""
                  onChange={(e)=>{
                    
                      setCampaign({...campaign,winningPrice:e.target.value})
                  }}
                  
                  >
                    <option value="">Lot</option>

                    
                    {dataWin.map((el)=>(<>
                      <option key={el._id} value={el._id}>{el.nameWinning}</option>
                    </>))}
                  </select>
                            
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
                  <select className='bg-transparent py-3 px-3 border-b w-52' name="" id=""
                  onChange={(e)=>{
                    
                      setCampaign({...campaign,user:e.target.value})
                  }}
                  
                  >
                    <option value="">Hotesse</option>

                    
                    {data.map((el)=>(<>
                      <option key={el._id} value={el._id}>{el.username}</option>
                    </>))}
                  </select>
                            
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
