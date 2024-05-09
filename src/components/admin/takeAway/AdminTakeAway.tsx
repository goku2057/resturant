import { FunctionComponent } from "react";
import AdminMenu from "../components/adminMenu/AdminMenu";
import AdminTakeAwayList from "./components/AdminTakeAwayList";
import AdminTakeAwayDetails from "./components/AdminTakeAwayDetails";
interface AdminPageProps {
    
}
 
const AdminTakeAway: FunctionComponent<AdminPageProps> = () => {
    return (  
        <>
        <div className='bg-adminbgColor'>
        <div className='relative gap-10 md:h-screen flex flex-col-reverse md:flex-row  md:justify-between text-white '>
            {/* Admin Menus */}
            <div className='flex-1 bg-admindarkColor flex  md:relative top-0'>
                <AdminMenu />
            </div>

            {/* Admin Items */}
            <div className='hide-scroolbar flex-[7_7_0%]  overflow-scroll'>
                <AdminTakeAwayList />
            </div>
            <div className='flex-[4_4_0%] '>
                <AdminTakeAwayDetails />
            </div>
        </div>
        </div>
        </>
    );
}
 
export default AdminTakeAway;