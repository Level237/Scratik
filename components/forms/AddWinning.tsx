'use client'
import React, { useState } from 'react'
import { Label } from '../ui/label'
import { ImageIcon } from 'lucide-react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';

export default function AddWinning() {

  const router=useRouter();
  const [buttonDisable,setButtonDisabled]=React.useState(false)
    const [loading,setLoading]=useState(false)
    const [loadImage,setLoadImage]=useState<boolean>(false)
    const [image,setImage]=useState("")
  const [winning,setWinning]=React.useState({
    nameWinning:"",
    quantity:"",
    mode:"",
    image:"",
  })

  const createWinning=async ()=>{
    
    console.log(winning.image)
}
  return (
    <section>
        
            <div className='flex gap-8 justify-between items-center'>
            <div className='flex flex-col mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Nom du lot' name="" id="" />
                </div>

                <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Quantité' name="" id="" />
                </div>
                <div className='flex mt-12'>
                    <Label>Mode de remise</Label>
                </div>
                <div className='flex items-center justify-start gap-2 mt-4'>
                <input type="radio" className='bg-transparent py-1 px-3 border-b w-3'  name="mode" id="point de vente" />
                <label >Dans un point de vente</label>
                </div>
                <div className='flex items-center justify-start gap-2 mt-4'>
                <input type="radio" className='bg-transparent py-1 px-3 border-b w-3' placeholder='Quantité' name="mode" id="centre de distribution" />
                <label >Dans un centre de distribution</label>
                </div>
      </div>

      <label  className="flex cursor-pointer items-center flex-col justify-center bg-slate-200 w-80 h-44 rounded-xl">
        {image.length > 0 && <div>
            <Image src={image} className="w-full h-full max-h-44" width="100" height="100" alt="dd"/>
            </div>}
      
      {loadImage &&   
<div className="flex flex-col items-center justify-center gap-2">
<div role="status">
<svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
<span className="sr-only">Loading...</span>

</div>
<div>
  <span className="text-white">Loading...</span>
</div>
</div>
}
     {!loadImage && image.length ==0 && <><ImageIcon className='w-16 text-gray-500 h-16'/>
   <div className="space-y-2">
      <h4 className="text-base font-semibold text-gray-700">Upload a file</h4>
      <span className="text-sm text-gray-500">Max 2 MO</span>
   </div></>}
   <input type="file" id="doc" name="image" accept="png, jpg" hidden
   onChange={(e)=>{
    setLoadImage(true)
    setTimeout(()=>{
      if(e.target.files?.length===1){
      setImage(URL.createObjectURL(e.target.files[0]));
      setLoadImage(false)
    }
    },[2000])
    setWinning({...winning,image:e.target.files?.[0]})
   }}
   />
</label>
            </div>
      <div className='flex mt-8 justify-end'>
      
      <button onClick={createWinning} className='bg-[#BE7E00] px-6 py-3'>Ajouter</button>
      </div>

       
     
    </section>
  )
}
