'use client'

import React, { useState, useEffect } from 'react'
import {FaLocationArrow, FaEdit} from 'react-icons/fa'

interface MethodHeaderProps {
    updateTotalPrice: (price: number) => void;
}

const OrderSummary: React.FC<MethodHeaderProps> = ({updateTotalPrice}) => {
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const items = [
        {
            name: 'Momo',
            quantity: 1,
            price: 120,
        },
        {
            name: 'Chaumin',
            quantity: 1,
            price: 160,
        },
    ]

    // Calculate the total price
    const calculateTotalPrice = () => {
        const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        updateTotalPrice(total);
        return total;
    };

    // Update the total price when the component mounts
    useEffect(() => {
        const calculatedTotal = calculateTotalPrice();
        setTotalPrice(calculatedTotal);
    }, []);

    return (
        <div className='bg-black rounded-3xl p-5 mx-5 md:mx-60'>
            <h3 className='text-white mb-5'>Order summary</h3>
            <div className='flex flex-col gap-10 text-gray-400'>
                {items.map((item, index) => (
                    <div key={index} className='grid grid-cols-4 '>
                        <div className='bg-red-300'>
                            <div className='h-16 w-full md:h-32 bg-gray-500'> 
                            </div>
                        </div>
                        <div className=' flex items-center '>
                            <div className='flex  flex-col pl-5 w-full justify-center '>
                                <p className=''>{item.name}</p>
                                <p className=''>Qty: {item.quantity}</p>
                            </div>
                        </div>
                        <div></div>
                        
                        <div className=' flex justify-end items-center'>
                            <p>Price {item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className='border-gray-700 border-t-2 my-5'></div>
            <div className='flex items-center justify-between  text-white'>
                <FaLocationArrow size={15}/>
                <p className='text-gray-400 text-[14px]'>Flat no 20, Hetauda-6, Chaughada</p>
                <FaEdit size={15}/>
            </div>

            <div className='border-gray-700 border-t-2 my-5'></div>
            <div className='flex justify-between mt-5'>
                <h3 className='text-white font-bold'>Rate</h3>
                <h3 className='text-white font-semibold'>Rs &nbsp; {totalPrice}</h3>
            </div> 
        </div>
    )
}

export default OrderSummary
