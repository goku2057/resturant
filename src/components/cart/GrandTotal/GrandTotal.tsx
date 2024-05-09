'use client'

import React, { useState, useEffect } from 'react'
import {FaLocationArrow, FaEdit} from 'react-icons/fa'

interface MethodHeaderProps{
    totalPrice: number;
}

const GrandTotal:React.FC<MethodHeaderProps> = ({totalPrice}) => {
    const tax = totalPrice * 13/100;
    const GrandTotal = totalPrice + tax + 99;
    
    return (
        <div className='bg-black rounded-3xl p-5 mx-5 md:mx-60'>
            <div className='flex justify-between mt-5'>
                <h3 className='text-white text-[14px]'>Subtotal</h3>
                <h3 className='text-white text-[14px] font-semibold'>Rs &nbsp; {totalPrice}</h3>
            </div>
            <div className='px-5'>
                <div className='flex justify-between mt-5'>
                    <h3 className='text-gray-400 text-[12px]'>Tax</h3>
                    <h3 className='text-gray-400 text-[12px]'>Rs {tax}</h3>
                </div>
                <div className='flex justify-between mt-5'>
                    <h3 className='text-gray-400 text-[12px]'>Delivery Fee</h3>
                    <h3 className='text-gray-400 text-[12px]'>Rs 99</h3>
                </div>
            </div>
            {/* DIVIDER */}
            <div className='border-gray-700 border-t-2 my-5'></div>
            <div className='flex justify-between mt-5'>
                <h3 className='text-white font-bold'>Grand Total</h3>
                <h3 className='text-white font-semibold'>Rs &nbsp; {GrandTotal}</h3>
            </div>
        </div>
    )
}

export default GrandTotal
