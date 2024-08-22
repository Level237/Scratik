"use client"
import React from 'react'
import { Grip, LayoutGrid, LogOut, MapPin, Medal, Trophy, User } from 'lucide-react'
import Image from 'next/image'
import { SidebarStore } from '@/store/SidebarStore'
import Link from 'next/link'
export default function Sidebar() {

    const currentPage=SidebarStore((set)=>set.currentPage)
    const setCurrentPage=SidebarStore((set)=>set.setCurrentPage)
  return (
    <section style={{ background:"url('/bg.png')",backgroundPosition:"center",backgroundSize:"cover" }} 
    className='max-h-[33rem] px-5 py-8 sticky top-10 w-[12rem] bottom-24'>
<Image className='w-[6rem]' width={80} height={80} src="/logo.png" alt=""/>

<section className='flex flex-col mt-16 gap-6'>
    <Link href="/dashboard" onClick={()=>setCurrentPage(1)}>
    <div className={`flex cursor-pointer ${currentPage === 1 ? "bg-[#57482959] py-2 px-4 rounded-sm" : "" }   items-center gap-2`}>
      <div >
      <LayoutGrid  className={`${currentPage===1 ? "text-[#BE7E00]" : "text-white"}`} />
      </div>
      <div>
          <h3 className={`${currentPage===1 ? "text-[#BE7E00]" : "text-white"} text-md`}>Dashboard</h3>
      </div>
  </div>
    </Link>
 
 <Link href="/users" onClick={()=>setCurrentPage(2)}>
 <div 
 className=
 {`flex cursor-pointer ${currentPage === 2 ? "bg-[#57482959] py-2 px-4 rounded-sm" : "" } 
 items-center gap-2`}>
      <div>
      <User className={`${currentPage===2 ? "text-[#BE7E00]" : "text-white"}`} />
      </div>
      <div>
          <h3 
          className={`${currentPage===2 ? "text-[#BE7E00]" : "text-white"}`}>Utilisateurs</h3>
      </div>
  </div>
 </Link>
 
 <Link  href="/sales" onClick={()=>setCurrentPage(3)}>
 <div className=
 {`flex cursor-pointer ${currentPage === 3 ? "bg-[#57482959] py-2 rounded-sm" : "" } 
 items-center gap-2`}>
      <div>
      <MapPin className={`${currentPage===3 ? "text-[#BE7E00]" : "text-white"}`} />
      </div>
      <div>
          <h3 className={`${currentPage===3 ? "text-[#BE7E00]" : "text-white"}`}>Point de ventes</h3>
      </div>
  </div>
 </Link>
 
 <Link href="/winning" onClick={()=>setCurrentPage(4)}>
 <div className=
 {`flex cursor-pointer ${currentPage === 4 ? "bg-[#57482959] py-2 rounded-sm" : "" } 
 items-center gap-2`}>
      <div>
      <Trophy className={`${currentPage===4 ? "text-[#BE7E00]" : "text-white"}`} />
      </div>
      <div>
          <h3 className={`${currentPage===4 ? "text-[#BE7E00]" : "text-white"}`}>Lots à gagner</h3>
      </div>
  </div>
 </Link>
 
 <Link href="/campaign" onClick={()=>setCurrentPage(5)}>
 <div className=
 {`flex cursor-pointer ${currentPage === 5 ? "bg-[#57482959] py-2 rounded-sm" : "" } 
 items-center gap-2`} >
      <div>
      <Trophy className={`${currentPage===5 ? "text-[#BE7E00]" : "text-white"}`} />
      </div>
      <div>
          <h3 className={`${currentPage===5 ? "text-[#BE7E00]" : "text-white"}`}>Campagnes</h3>
      </div>
  </div>
 </Link>
 

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
