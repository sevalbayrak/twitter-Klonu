import { Outlet } from "react-router-dom";
import Sidebar from'../main/sidebar'
import Rightbar from "./rightbar";

import { useModal } from "~/store/auth copy/hooks";
import Modal from "~/modals";
import { useEffect } from "react";
import { useAppearance } from "~/store/appearance/hooks";



export default function layoutmain(){

    const modal = useModal()
	const appearance = useAppearance()

	useEffect(() => {

		document.documentElement.style.setProperty('--background-primary', appearance.backgroundColor.primary)
	
		document.documentElement.style.setProperty('--background-secondary', appearance.backgroundColor.secondary)
		document.documentElement.style.setProperty('--background-third', appearance.backgroundColor.third)
        document.documentElement.style.setProperty('--background-modal', appearance.backgroundColor.modal)
		

		document.documentElement.style.setProperty('--color-primary', appearance.color.primary)
		
		document.documentElement.style.setProperty('--color-secondary', appearance.color.secondary)
        document.documentElement.style.setProperty('--color-base', appearance.color.base)
        document.documentElement.style.setProperty('--color-bases', appearance.color.bases)
        document.documentElement.style.setProperty('--box-shadow', appearance.boxShadow)



		document.documentElement.style.setProperty('--font-size', appearance.fontSize + 'px')

	}, [appearance])
    return(
        <div className="w-[1265px] mx-auto flex">
            {modal && <Modal/>}
            
           <Sidebar/>
           <main className="flex-1 flex gap-[30px]">
           <main className="flex-1 max-w-[600px] border-x border-[color:var(--background-third)]">

           <Outlet/>
          

           </main>
           <Rightbar/>
           </main> 
           
       
           
        </div>
    )
}