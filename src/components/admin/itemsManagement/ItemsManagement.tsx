'use client'

import { FunctionComponent } from "react";
import AdminMenu from "../components/adminMenu/AdminMenu";
import ManagementItems from "./components/ManagementItems";

interface AdminPageProps {
}
 
const ItemsManagement: FunctionComponent<AdminPageProps> = () => {
    // const isAdmin = profileData?.admin;

    const isAdmin = true;

    if(isAdmin){
        return (  
            <>
            {/* <AddNewItem/> */}
            <div className='h-screen flex md:h-auto md:block bg-adminbgColor'>
                <div className='relative md:gap-10 md:h-screen flex flex-col-reverse md:flex-row  md:justify-between text-white '>
                    {/* Admin Menus */}
                    <div className=' flex-1 bg-admindarkColor flex  md:relative top-0'>
                        <AdminMenu />
                    </div>

                    {/* Admin Items */}
                    <div className='hide-scroolbar flex-[11_11_0%]  overflow-scroll'>
                        <ManagementItems />
                    </div>
                    <div></div>
                </div>
            </div>
            </>
        )
    }
}
 
export default ItemsManagement;