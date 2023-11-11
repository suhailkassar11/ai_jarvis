'use client'

import { Button } from "@/components/ui/button"
import { Sheet,SheetContent,SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";



const MobileSidebar=()=>{

    const[isMounted,setIsMounted]=useState(false)
    useEffect(()=>{
        setIsMounted(true);
    },[])
    if(!isMounted){
        return null;
    }
return (
        <div className="flex ">
            <Sheet>
                <SheetTrigger>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu/>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-72">
                    <Sidebar/>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileSidebar;