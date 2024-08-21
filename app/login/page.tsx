import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <section className="h-screen gap-16 py-6 overflow-hidden flex justify-start mx-24 items-center">
        <section>
            <Image className='max-h-[90vh]' width={550} height={200} src="/login.png" alt=""/>
        </section>
        <section className='flex flex-col gap-5'>
                <div>
                <Image className='w-[11rem]' width={120} height={120} src="/logo.png" alt=""/>
                </div>
                <div>
                    <h3 className='text-white text-xl w-80'>Connecter vous à votre profil pour commencer</h3>
                </div>
        </section>
    </section>
  )
}
