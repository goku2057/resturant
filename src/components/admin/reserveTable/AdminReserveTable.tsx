'use client'

import { FunctionComponent, useState } from "react";
import AdminMenu from "../components/adminMenu/AdminMenu";
import AdminItems from './components/adminItems/AdminItems'
import AdminDetails from "./components/adminDetails/AdminDetails";

interface AdminPageProps {
    
}
 
const AdminReserveTable: FunctionComponent<AdminPageProps> = () => {
    const [selectedTable, setSelectedTable] = useState(null);

    const handleTableSelection = (table: any) => {
        setSelectedTable(table);
    };

    return (  
        <>
        <div className='bg-gray-200'>
        <div className='relative gap-10 md:h-screen flex flex-col md:flex-row  md:justify-between text-white '>
            {/* Admin Menus */}
            <div className='flex-1 bg-admindarkColor flex  md:relative top-0'>
                <AdminMenu />
            </div>

            {/* Admin Items */}
            <div className='hide-scroolbar flex-[7_7_0%]  overflow-scroll'>
                <AdminItems onTableSelection={handleTableSelection} />
            </div>
            <div className='flex-[4_4_0%] '>
                <AdminDetails selectedTable={selectedTable} />
            </div>
        </div>
        </div>
        </>
    );
}
 
export default AdminReserveTable;