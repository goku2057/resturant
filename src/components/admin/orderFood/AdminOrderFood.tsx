'use client'

import { FunctionComponent, useEffect, useState } from "react";
import AdminMenu from "../components/adminMenu/AdminMenu";
import AdminOrderDetails from "./components/AdminOrderDetails";
import AdminOrderList from "./components/AdminOrderList";
import {useProfile} from "@/hook/useProfile"

interface AdminPageProps {
}
 
const AdminOrderFood: FunctionComponent<AdminPageProps> = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const { data: profileData }: any = useProfile();
    const isAdmin = true;
    
    const handleOrderSelection = (table: any) => {
        setSelectedOrder(table);
    };

    if(isAdmin){
        return (  
            <>
            <div className='bg-[#f5f5f5]'>
            <div className='relative gap-10 md:h-screen flex flex-col md:flex-row  md:justify-between text-white '>
                {/* Admin Menus */}
                <div className='flex-1 bg-admindarkColor flex  md:relative top-0 z-10'>
                    <AdminMenu />
                </div>

                {/* Admin Items */}
                <div className='hide-scroolbar  flex-[7_7_0%]  overflow-scroll'>
                    <AdminOrderList onOrderSelection={handleOrderSelection} />
                </div>
                <div className='flex-[4_4_0%] '>
                    <AdminOrderDetails selectedOrder={selectedOrder}/>
                </div>
            </div>
            </div>
            </>
        )
    };
}
 
export default AdminOrderFood;