import React from 'react'

const OrderDetailsTitles = ({activeFilter, setActiveFilter}: any) => {
  return (
    <>
        <div className="px-5">
            <div className="">
                <div className="flex justify-between">
                    <h2>Order Report</h2>
                    <div className="flex items-center gap-2 border-gray-600 text-[12px] text-white cursor-pointer font-normal">
                        <h3 onClick={() => setActiveFilter('all')} className={`rounded text-[12px] ${activeFilter === 'all' ? 'bg-white' : 'bg-gray-700 text-white'}  text-black font-bold p-2`}>all</h3>
                        <h3 onClick={() => setActiveFilter('paid')} className={`rounded text-[12px] ${activeFilter === 'paid' ? 'bg-green-600 text-white' : 'bg-green-400'}  text-white font-bold p-2`}>paid</h3>
                        <h3 onClick={() => setActiveFilter('pending')} className={`rounded text-[12px] ${activeFilter === 'pending' ? 'bg-red-600 text-white' : 'bg-red-400'}  text-white font-bold p-2`}>pending</h3>
                    </div>

                </div>
                <div className="grid grid-cols-3 md:grid-cols-5 mt-4 gap-10 ">
                    <h3 className="text-white">Customer</h3>
                    <h3 className="sm:block hidden text-white">Menu</h3>
                    <h3 className="sm:block hidden text-white">Time</h3>
                    <h3 className="text-white text-center sm:text-start">Total Payment</h3>
                    <h3 className="text-white">Status</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default OrderDetailsTitles