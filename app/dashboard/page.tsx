
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <section className='h-screen mx-12 my-16 flex justify-between'>
      <Sidebar/>
      <section className='flex flex-col gap-8'>
            <div className='flex gap-3'>
                <span className='text-gray-500'>Bienvenue</span>
                <h3 className='text-white text-xl'>Maxime Eboue</h3>
            </div>
      </section>
    </section>
  )
}
