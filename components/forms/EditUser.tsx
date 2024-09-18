'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function EditUser
({id,
username,
quarter,
address,
email,
phone,
password,
role,
login,

}:
    
    {id:string,username:string,quarter:string,address:string,email:string,phone:string,password:string,role:string,login:string}) {

  const router=useRouter();
  const [buttonDisable,setButtonDisabled]=React.useState(false)
    const [loading,setLoading]=useState(false)
  const [user,setUser]=React.useState({
    id:"",
    username:"",
    quarter:"",
    address:"",
    email:"",
    phone:"",
    password:"",
    role:"",
    login:""
  })

  const createUser=async ()=>{
    try {
        setLoading(true)
        const response=await axios.post('/api/users/signup',user)

        //console.log("signup success",response.data)
        router.push("/users")
    } catch (error:any) {
        console.log("Signup failed",error.message)
        //toast.error(error.message)
    }finally{
        setLoading(false)
    }
}

useEffect(()=>{
  if(user.email.length>0 && user.password.length >0 && user.username.length >0){
      setButtonDisabled(false)
  }else{
      setButtonDisabled(true)
  }
  
},[])
  return (
    <section>
        <form action="">
        <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Nom et Prénoms' name="" id="" 
                                     value={user.username}
                                     onChange={(e)=>setUser({...user,username:e.target.value})}
                            />
                </div>

                <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Quartier' name="" id=""
                                     value={user.quarter}
                                     onChange={(e)=>setUser({...user,quarter:e.target.value})}
                            />
                </div>
      </div>
      <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="email" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Email' name="" id="" 
                                     value={user.email}
                                     onChange={(e)=>setUser({...user,email:e.target.value})}
                            />
                </div>

                <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Adresse' name="" id="" 
                                     value={user.address}
                                     onChange={(e)=>setUser({...user,address:e.target.value})}
                            />
                </div>
      </div>
      <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Numéro de téléphone' name="" id=""
                            
                            value={user.phone}
                            onChange={(e)=>setUser({...user,phone:e.target.value})}
                            />
                </div>

                <div>
                            <input type="password" className='bg-transparent py-3 px-3 border-b w-full' placeholder='Mot de passe' name="" id="" 
                                     value={user.password}
                                     onChange={(e)=>setUser({...user,password:e.target.value})}
                            />
                </div>
      </div>

      <div className='flex mb-5 items-center justify-between'>
            <div>
                            <input type="text" className='bg-transparent py-3 px-3 border-b w-full' placeholder='login' name="" id=""
                                     value={user.login}
                                     onChange={(e)=>setUser({...user,login:e.target.value})}
                            />
                </div>

                <div>
                  <select className='bg-transparent py-3 px-3 border-b w-52' name="" id=""
                  onChange={(e)=>{
                    
                      setUser({...user,role:e.target.value})
                      console.log(user.role)
                  }}
                  
                  >
                    <option value="">Role</option>
                    <option value="hotesse">Hotesse</option>
                    <option value="superviseur">Superviseur</option>
                    <option value="joueur">Joueur</option>
                  </select>
                            
                </div>
      </div>
      <div className='flex justify-end'>
      <button onClick={createUser}  className='bg-[#BE7E00] px-6 py-3'>Ajouter</button>
      </div>

        </form>
     
    </section>
  )
}
