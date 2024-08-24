import React from 'react'
import { motion } from 'framer-motion'
import { ModalStore } from '@/store/ModalStore'

export default function Modal() {
  
    const close=ModalStore((set:any)=>set.close)
  return (
    
<>


<section className='fixed left-0 top-0 flex justify-between items-center    h-screen  w-full z-[9999999999999999999999]'>
<div className='absolute blur-lg invert brightness-150 md:filter-none inset-0 top-0 bottom-0 bg-black opacity-85'>

</div>
<div   aria-hidden="true" className=" flex  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-2xl max-h-full">
        <motion.div
        initial={{ 
            opacity:0,
            y:-300
          }}
     
          animate={{ 
             y:0,
             opacity:1
           }}
           exit={{ 
            y:-200,
            opacity:0
           }}
        className="relative bg-white rounded-lg shadow">
            
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-3xl flex-1 text-center font-semibold text-gray-900 dark:text-white">
                    Profiter de notre Réduction
                </h3>
                <button onClick={()=>close()} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            
            <div className="p-4 md:p-5 space-y-4">
                <div className='flex gap-5  decoration-solid decoration-2 justify-center items-center'>
                    <div className='p-5 bg-[#f6ea0b] decoration-red-600 line-through   text-black font-bold'>50,000 XAF</div>
                    <div>

                <svg width="30" height="30" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M32 2C15.432 2 2 15.432 2 32c0 16.568 13.432 30 30 30s30-13.432 30-30C62 15.432 48.568 2 32 2zm1.693 46V37.428H15V27.143h18.693V16L49 32L33.693 48z" fill="#000000"></path></g></svg>
                </div>
                <div className='p-5 text-[#f6ea0b]   bg-black font-bold'>15,000 XAF</div>
                </div>
                
                <p className="text-base font-bold text-center leading-relaxed text-black">
                    Ne rater pas cette promotion qui ne pourra pas durer et qui pourra changer votre vie
                </p>
               
            </div>
         
            <div className="flex items-center justify-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button className='bg-[#f6ea0b] px-4 py-2 rounded font-bold' onClick={() => console.log("Primary")}>
          Voir l'offre
        </button>
                <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Sortir</button>
            </div>
        </motion.div>
    </div>
</div>
</section>

</>






  )
}