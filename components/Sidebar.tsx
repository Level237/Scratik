"use client"
import React, { useEffect, useState } from 'react'
import { Grip, LayoutGrid, LogOut, MapPin, Medal, Settings, Trophy, User } from 'lucide-react'
import Image from 'next/image'
import { SidebarStore } from '@/store/SidebarStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
export default function Sidebar() {

    const [role,setRole]=useState("")
    const router=useRouter()

    const logoutSupervisor=async ()=>{
        try {
            await axios.get('/api/users/logout/supervisor')
            //toast.success('Logged out successfully')
            router.push('/login/supervisor')
        } catch (error:any) {
            console.log(error.message)
            //toast.error(error.message)
        }
    }
    const logout=async ()=>{
        try {
            await axios.get('/api/users/logout')
            //toast.success('Logged out successfully')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message)
            //toast.error(error.message)
        }
    }
    const getUserDetails=async()=>{
        try{
            const res=await axios.get('/api/supervisor/me')
            console.log(res.data)
            setRole(res.data.data.role)
        } catch (error:any) {
            console.log(error.message)
            //toast.error(error.message)
        }
        
    }

    useEffect(()=>{
        
            getUserDetails()
        
        
      },[role])
    const currentPage=SidebarStore((set)=>set.currentPage)
    const setCurrentPage=SidebarStore((set)=>set.setCurrentPage)
  return (
    <section style={{ background:"url('/bg.png')",backgroundPosition:"center",backgroundSize:"cover" }} 
    className='max-h-[34rem] px-5 py-8 sticky top-10 w-[12rem] bottom-24'>
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
 
 <Link href="/winners" onClick={()=>setCurrentPage(6)}>
  <div className={`flex cursor-pointer ${currentPage === 6 ? "bg-[#57482959] py-2 rounded-sm" : "" } 
 items-center gap-2`}>
      <div>
      <Medal className={`${currentPage===6 ? "text-[#BE7E00]" : "text-white"}`} />
      </div>
      <div>
          <h3 className={`${currentPage===6 ? "text-[#BE7E00]" : "text-white"}`}>Gagnants</h3>
      </div>
  </div>
  </Link>
  <Link href="/settings" onClick={()=>setCurrentPage(7)}>
  <div className={`flex cursor-pointer ${currentPage === 7 ? "bg-[#57482959] py-2 rounded-sm" : "" } 
 items-center gap-2`}>
      <div>
      <Settings className={`${currentPage===7 ? "text-[#BE7E00]" : "text-white"}`} />
      </div>
      <div>
          <h3 className={`${currentPage===7 ? "text-[#BE7E00]" : "text-white"}`}>Parametres</h3>
      </div>
  </div>
  </Link>
</section>
<div className='absolute bottom-6 cursor-pointer'>
    <div className='flex items-center gap-3'>
        <div>
        <LogOut className='w-5 h-5 text-gray-500'/>
        </div>
        {role ==="superviseur"  && <div  onClick={logoutSupervisor}>
            <h2 className='text-gray-500'>Deconnexion</h2>
        </div>}
        {role !=="superviseur"  && <div  onClick={logout}>
            <h2 className='text-gray-500'>Deconnexion</h2>
        </div>}
    </div>

</div>
    </section>
  )
}
