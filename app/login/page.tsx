import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <section className="h-screen gap-16 py-6 overflow-hidden flex justify-start mx-44 items-center">
        <section>
            <Image className='max-h-[90vh]' width={550} height={200} src="/login.png" alt=""/>
        </section>
        <section className='flex flex-col gap-10'>
                <div>
                <Image className='w-[11rem]' width={120} height={120} src="/logo.png" alt=""/>
                </div>
                <div>
                    <h3 className='text-white text-xl w-80'>Connecter vous à votre profil pour commencer</h3>
                </div>
                <div>
                    <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Identifiant' name="" id="" />
                </div>
                <div>
                    <input type="password" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Mot de passe' name="" id="" />
                </div>
                <div>
               <section className='flex items-center justify-between'>
               <div className="flex items-center space-x-2">
                    <Checkbox className='border-white' id="terms" />
                    <Label className='text-white text-sm' htmlFor="terms">Restez connecté</Label>
                </div>
                <div className=''>
                    <h3 className='text-sm text-[#BE7E00]'>Mot de passe oublié</h3>
                </div>
               </section>
                </div>
                <div>
            <button className='bg-[#BE7E00] px-6 py-3'>Connexion</button>
        </div>
        </section>
        
    </section>
  )
}
