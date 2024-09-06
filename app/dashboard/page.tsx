
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import React from 'react'
import ChartHotesse from '../../components/charts/chartHotesse';
import ChartUser from '@/components/charts/chartUser';
import ChartCampaign from '@/components/charts/chartCampaign';

export default function page() {
  return (
    <section className='flex flex-1 flex-col gap-8'>
    <div className='flex  justify-end gap-3'>
        <span className='text-gray-500'>Bienvenue</span>
        <h3 className='text-white text-xl'>Maxime Eboue</h3>
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
