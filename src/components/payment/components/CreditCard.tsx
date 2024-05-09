import {FaPlus} from 'react-icons/fa';
import {FaCircle} from 'react-icons/fa'

const CreditCard = () => {
  return (
    <div className='bg-black rounded-2xl p-5 mx-5 md:mx-60'>
            <div className='flex justify-between px-5 mt-5'>
                <h3 className='text-white text-[14px]'>ADHC Bank **** **** **** 2456</h3>
                <FaCircle  size={15} className='text-red-800'/>
            </div>
            <div className='flex justify-between px-5 mt-5'>
                <h3 className='text-white text-[14px]'>IMDB Bank **** **** **** 2456</h3>
                <FaCircle  size={15} className='text-green-800'/>
            </div>
            
            {/* DIVIDER */}
            <div className='border-gray-700 border-t-2 my-5'></div>

            <div className='flex px-5 mt-5'>
                <button className='bg-transparent flex items-center gap-5'>
                    <FaPlus size={15} className='text-white'/>
                    <h3>Add New Card</h3>
                </button>
            </div>
        </div>
  )
}

export default CreditCard
