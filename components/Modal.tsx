import React from 'react'
import { motion } from 'framer-motion'
import { ModalStore } from '@/store/ModalStore'

const Modal: React.FC<{title:string,children:React.ReactNode}>=({title,children}) =>{
  
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
        className="relative bg-white pb-5 rounded-lg shadow">
            
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-3xl flex-1 text-center font-semibold text-gray-900 dark:text-white">
                    {title}
                </h3>
                <button onClick={()=>close()} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            
            <div className="p-4 md:p-5 mx-2 space-y-4">
                {children}
               
            </div>
         
           
        </motion.div>
    </div>
</div>
</section>

</>







  )
}

export default Modal;