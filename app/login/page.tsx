"use client"
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function page() {

    const router=useRouter();

    const [error,setError]=useState('')
    const [admin,setAdmin]=useState({
        email:"",
        password:"",
    })

    const [buttonDisable,setButtonDisabled]=React.useState(false)
    const [loading,setLoading]=useState(false)

    

    useEffect(()=>{
        if(admin.email.length>0 && admin.password.length >0){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    },[admin])

    const onLogin=async ()=>{
        try {
            setLoading(true);
            const response=await axios.post("api/admin/signup",{
                username:"scratik",
                email:"scratik@gmail.com",
                password:"password"
            });
            //toast.success('Login Success')
            router.push('/dashboard')
        } catch (error:any) {
            console.log("Login Failed",error.message)
            setError("login failed");
            //toast.error(error.message)
        }finally{
            setLoading(false);
        }
    }
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
                {error && <div className='text-red-500'>
                    {error}
                    </div>}
                <div>
                    <input type="email" className='bg-transparent text-white py-3 px-3 border-b w-full' placeholder='Identifiant' name="" id=""
                      value={admin.email}
                      onChange={(e)=>setAdmin({...admin,email:e.target.value})}
                    />
                </div>
                <div>
                    <input type="password" className='bg-transparent text-white py-3 px-3 border-b w-full' placeholder='Mot de passe' name="" id="" 
                    value={admin.password}
                    onChange={(e)=>setAdmin({...admin,password:e.target.value})}
                    />
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
            <button onClick={onLogin}  className='bg-[#BE7E00] px-6 py-3'>Connexion</button>
        </div>
        </section>
        
    </section>
  )
}
