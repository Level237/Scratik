import { create } from "zustand";

interface ModalStoreInterface{
    isVisible:boolean,
    open:()=>void,
    close:()=>void
}

export const SidebarStore=create<ModalStoreInterface>((set)=>({
    isVisible:false,
    open:()=>{
        set({isVisible:true})
    },
    close:()=>{
        set({isVisible:false})
    }
}))