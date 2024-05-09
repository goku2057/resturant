import {FaHome, FaPizzaSlice, FaBiking} from 'react-icons/fa'
import {FaUserLock, FaGear, FaTable } from 'react-icons/fa6'
import {AiOutlineOrderedList} from 'react-icons/ai'
import Link from 'next/link'

function AdminMenu() {
  return (
    <div className="flex bg-gray-800 fixed  bottom-0 md:relative md:flex-col w-full justify-between  items-center p-5 ">
        <Link href='/admin'>
        <div className='transition-all hover:scale-[1.09] p-2 cursor-pointer bg-[#7272e9] rounded-2xl'> <FaHome className="md:h-7 md:w-7" size={22}/> </div>
        </Link>

        <div className="flex gap-5 md:gap-10 md:flex-col ">
            <Link href='/admin/reserveTable'><div className=' hover:scale-[1.09] p-2 md:p-4 cursor-pointer transition-all hover:bg-[#7272e9] rounded-xl'><FaTable className="md:h-5 md:w-5" size={17}/></div></Link>
            <Link href='/admin/orderFood'><div className=' hover:scale-[1.09] p-2 md:p-4 cursor-pointer transition-all hover:bg-[#7272e9] rounded-xl'><AiOutlineOrderedList className="md:h-5 md:w-5" size={17}/></div></Link>
            <Link href='/admin/itemsManagement'>
              <div className=' hover:scale-[1.09] p-2 md:p-4 cursor-pointer transition-all hover:bg-[#7272e9] rounded-xl'><FaGear className="md:h-5 md:w-5" size={17}/></div>
            </Link>
        </div>

        <Link href='/admin/adminProfile'>
          <div className='transition-all hover:scale-[1.09] cursor-pointer'> <FaUserLock className="md:h-7 md:w-7" size={22}/> </div>
        </Link>
    </div>
  )
}

export default AdminMenu
