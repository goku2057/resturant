import {FaPlus} from 'react-icons/fa';
import {FaCircle} from 'react-icons/fa'

const Upi = () => {
  return (
    <div className='bg-black rounded-2xl p-5 mx-5 md:mx-60'>
            <div className='flex justify-between px-5 mt-5'>
                <button className='bg-transparent '><h3 className='text-white text-[14px]'>Blue Way</h3></button>
                <FaCircle  size={15} className='text-blue-800'/>
            </div>
            <div className='flex justify-between px-5 mt-5'>
                <button className='bg-transparent '><h3 className='text-white text-[14px]'>Phone Pay</h3></button>
                <FaCircle  size={15} className='text-gray-800'/>
            </div>
            
            {/* DIVIDER */}
            <div className='border-gray-700 border-t-2 my-5'></div>

            <div className='flex px-5 mt-5'>
                <button className='bg-transparent  flex items-center gap-5'>
                    <FaPlus size={15} className='text-white'/>
                    <h3>Add New UPI ID</h3>
                </button>
            </div>
        </div>
  )
}

export default Upi
