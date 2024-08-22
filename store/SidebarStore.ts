import { create } from "zustand";

interface SideBarStoreInterface{
    currentPage:number,
    setCurrentPage:(currentNumber:number)=>void
}

export const SidebarStore=create<SideBarStoreInterface>((set)=>({
    currentPage:1,
    setCurrentPage:(currentNumber:number)=>{
        set({currentPage:currentNumber})
    }
}))