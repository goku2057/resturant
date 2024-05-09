import {FaWallet, FaMoneyBill, FaArrowRight} from 'react-icons/fa';
import {FaCircle} from 'react-icons/fa'

const MorePayment = () => {
  return (
    <div className='bg-black rounded-2xl p-5 mx-5 mb-5 md:mx-60'>
            <div className='flex justify-between items-center px-5 mt-5'>
                <div className='flex items-center gap-5'>
                    <FaWallet className='text-white'/>
                    <button className='bg-transparent '><h3 className='text-white text-[14px]'>Esewa</h3></button>
                </div>
                <FaArrowRight  size={15} className='text-gray-400'/>
            </div>
            <div className='flex justify-between items-center px-5 mt-5'>
                <div className='flex items-center gap-5'>
                    <FaMoneyBill className='text-white'/>
                    <button className='bg-transparent '><h3 className='text-white text-[14px]'>Cash on Delivery</h3></button>
                </div>
                <FaCircle  size={15} className='text-gray-600'/>
            </div>
        </div>
  )
}

export default MorePayment
