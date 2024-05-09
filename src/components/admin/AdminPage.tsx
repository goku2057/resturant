import { FunctionComponent } from "react";
import {FaGear} from 'react-icons/fa6';
import AdminMenu from "./components/adminMenu/AdminMenu";
import Image from "next/image";
import Link from "next/link";

import reservetable from '../../../public/assets/images/reservetable.png';
import orderfood from '../../../public/assets/images/orderfood.png';

interface AdminPageProps {
}
 
const AdminPage: FunctionComponent<AdminPageProps> = () => {
    return (  
        <>
        <div className='bg-adminbgColor'>
        <div className='relative gap-10 h-screen flex flex-col-reverse md:flex-row  md:justify-between text-white '>
            {/* Admin Menus */}
            <div className=' flex-1 bg-admindarkColor flex md:relative top-0'>
                <AdminMenu />
            </div>

            {/* Admin Items */}
            <div className='relative hide-scroolbar flex-[11_11_0%]  '>
              
                <div className='flex flex-col items-center md:min-h-[100vh] md:flex-row  gap-5 md:justify-center md:gap-10'>
                    <Link href='/admin/reserveTable'>
                      <div className='transition-all hover:shadow-xl  hover:scale-[1.02] w-40 flex flex-col items-center justify-center bg-[#264f8b] rounded-2xl cursor-pointer'>
                        <div className='h-24 md:h-32 bg-adminblueColor w-full rounded-t-2xl flex flex-col justify-center items-center'>
                          <Image className="w-20 md:w-28" width={0} src={reservetable} alt="orderfood"/>
                        </div>
                        <div className='px-5 py-3 text-sm font-bold text-white'>RESERVE TABLE</div>
                      </div>
                    </Link>
                    <Link href='/admin/orderFood'>
                      <div className='transition-all hover:shadow-xl hover:scale-[1.02] w-40 flex flex-col items-center justify-center bg-[#581515]  rounded-2xl cursor-pointer'>
                        <div className='h-24 md:h-32 bg-adminredColor w-full rounded-t-2xl flex flex-col justify-center items-center'>
                          <Image className="w-20 md:w-28" width={0}  src={orderfood} alt="orderfood"/>
                        </div>
                        <div className='px-5 py-3 text-sm font-bold text-white'>ORDER FOOD</div>
                      </div>
                    </Link>
                    <Link href='/admin/itemsManagement'>
                      <div className='transition-all hover:shadow-xl hover:scale-[1.02] w-40 flex flex-col items-center justify-center bg-[#374699]  rounded-2xl cursor-pointer'>
                        <div className='h-24 md:h-32  w-full rounded-t-2xl flex flex-col justify-center bg-[#456bd3] items-center'>
                          {/* <Image width={200} src={takeaway} alt="orderfood"/> */}
                          <FaGear  className="w-10 h-10 md:w-16 md:h-16" width={0}  />
                        </div>
                        <div className='px-5 py-3 text-sm font-bold text-white'>EDIT ITEMS</div>
                      </div>
                    </Link>
                    
                </div>
            </div>

            <div></div>
        </div>
        </div>
        </>
    );
}
 
export default AdminPage;