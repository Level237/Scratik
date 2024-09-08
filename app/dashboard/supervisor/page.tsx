
import Sidebar from '@/components/Sidebar'
"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ChartUser from '@/components/charts/chartUser';
import ChartCampaign from '@/components/charts/chartCampaign';
import axios from 'axios';
import ChartHotesse from '@/components/charts/chartHotesse';

export default function page() {

  const [data,setData]=useState('')
  const getUserDetails=async()=>{
    const res=await axios.get('/api/supervisor/me')
    console.log(res.data)
    setData(res.data.data.username)
}
useEffect(()=>{

  getUserDetails()
},[])
  return (
    <section className='flex flex-1 flex-col gap-8'>
    <div className='flex  justify-end gap-3'>
        <span className='text-gray-500'>Bienvenue</span>
        <h3 className='text-white text-xl'>{data}</h3>
    </div>
    <section className='flex gap-8'>
      <ChartHotesse/>
      <ChartUser/>
      
    </section>
    <section className='flex'>
    <ChartCampaign/>
    </section>
</section>
  )
}
