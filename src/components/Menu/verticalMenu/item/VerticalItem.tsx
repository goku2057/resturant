'use client'

import {FaWeight, FaPlus} from 'react-icons/fa';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '@/components/appContext';
import { CldImage } from 'next-cloudinary';

interface MethodHeaderProps{
    imgUrl: string,
    title: string,
    weight: string,
    price: string,
}

const VerticalItem: React.FC<MethodHeaderProps> = (props) => {
    const {addToCart}: any = useContext(CartContext);

    function handleAddToCart () {
        addToCart(props);
    }
    
    return (
        <div>     
            <div className='transition-all hover:scale-[1.06] cursor-pointer border-2 border-blue-500 hover:border-red-500 hover:shadow-xl shadow-[#aac0ffac] hover:shadow-[#ff00002f] bg-gray-800 shadow-lg   text-white flex flex-row  rounded-2xl'>
            <div className="">
                {props.imgUrl && <CldImage
                    width="200"
                    height="200"
                    src={props.imgUrl}
                    sizes="100vw"
                    alt=""
                    className="w-[200px] h-[150px] rounded-l-2xl"
                />}
            </div>
            <div className='flex-1 flex flex-col p-4 gap-2 w-[100px]  justify-center rounded-r-2xl'>
                <h2 className='font-bold'>{props.title}</h2>
                <div className='flex gap-2 items-center justify-start'>
                    <FaWeight className='opacity-50' size={10}/>
                    <p className='text-[12px] font-thin'>{props.weight}</p>
                </div>
                <div className='flex items-center justify-between '>
                    <h2 className='font-bold'>{props.price}</h2> 
                    <div onClick={handleAddToCart}  className='transition-all cursor-pointer border-2 border-red-500 hover:scale-[1.1] hover:rotate-90  bg-white p-2 rounded-full'>
                        <FaPlus className='text-red-500 h-4 w-4 md:h-5 md:w-5' size={20}/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default VerticalItem
