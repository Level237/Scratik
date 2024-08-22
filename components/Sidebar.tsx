import React from 'react'
import { Grip, LayoutGrid, LogOut, MapPin, Medal, Trophy, User } from 'lucide-react'
import Image from 'next/image'
export default function Sidebar() {
  return (
    <section style={{ background:"url('/bg.png')",backgroundPosition:"center",backgroundSize:"cover" }} 
    className='max-h-[33rem] px-5 py-8 sticky top-10 w-[12rem] bottom-24'>
<Image className='w-[6rem]' width={80} height={80} src="/logo.png" alt=""/>

<section className='flex flex-col mt-16 gap-6'>
  <div className='flex cursor-pointer bg-[#57482959] py-2 px-4 rounded-sm items-center gap-2'>
      <div >
      <LayoutGrid  className=' text-[#BE7E00]' />
      </div>
      <div>
          <h3 className='text-[#BE7E00] text-md'>Dashboard</h3>
      </div>
  </div>
  <div className='flex cursor-pointer items-center gap-2'>
      <div>
      <User className='text-white' />
      </div>
      <div>
          <h3 className='text-white text-md'>Utilisateurs</h3>
      </div>
  </div>
  <div className='flex cursor-pointer items-center gap-2'>
      <div>
      <MapPin className='text-white' />
      </div>
      <div>
          <h3 className='text-white text-md'>Point de ventes</h3>
      </div>
  </div>
  <div className='flex cursor-pointer items-center gap-2'>
      <div>
      <Trophy className='text-white' />
      </div>
      <div>
          <h3 className='text-white text-md'>Lots à gagner</h3>
      </div>
  </div>
  <div className='flex cursor-pointer items-center gap-2'>
      <div>
      <Trophy className='text-white' />
      </div>
      <div>
          <h3 className='text-white text-md'>Campaignes</h3>
      </div>
  </div>

  <div className='flex cursor-pointer items-center gap-2'>
      <div>
      <Medal className='text-white' />
      </div>
      <div>
          <h3 className='text-white text-md'>Gagnants</h3>
      </div>
  </div>
</section>
<div className='absolute bottom-6 cursor-pointer'>
    <div className='flex items-center gap-3'>
        <div>
        <LogOut className='w-5 h-5 text-gray-500'/>
        </div>
        <div>
            <h2 className='text-gray-500'>Deconnexion</h2>
        </div>
    </div>

</div>
    </section>
  )
}
