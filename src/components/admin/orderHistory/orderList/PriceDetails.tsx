import React from 'react'

interface details {
    date: string;
    totalPaid: string;
    totalPending: string;
}

const PriceDetails = ({date, totalPaid, totalPending}: details) => {
  return (
    <>
        <div className='border p-5 flex flex-col  gap-2 items-start'>
                <p className='mb-2'>{date === '' ? 'TOTAL' : date.toUpperCase()}</p>
                <div className='flex gap-10 justify-center items-center'>
                    <h1 className='border-2 border-[#3dcf3da2] font-medium text-sm p-2 rounded'>paid</h1>
                    <p>:</p>
                    <p><span className='text-[12px] font-normal'>Rs.</span> {totalPaid}</p>
                </div>
                <div  className='flex gap-10 justify-center items-center'>
                    <h1 className='border-2 border-[#d33e3ec4] font-medium text-sm p-2 rounded'>pending</h1>
                    <p>:</p>
                    <p><span className='text-[12px] font-normal'>Rs.</span> {totalPending}</p>
                </div>
        </div>
    </>
  )
}

export default PriceDetails