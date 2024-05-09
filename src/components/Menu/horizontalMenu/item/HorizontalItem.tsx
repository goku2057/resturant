'use client'

import {FaWeight, FaPlus} from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '@/components/appContext';
import { CldImage } from 'next-cloudinary';

interface MethodHeaderProps{
    imgUrl: string,
    title: string,
    weight: string,
    price: string,
}

const HorizontalItem: React.FC<MethodHeaderProps> = (props) => {
    const {addToCart}: any = useContext(CartContext);

    function handleAddToCart () {
        addToCart(props);
    }
    
    return (
        <div className='transition-all bg-gray-800 hover:scale-[1.06] cursor-pointer shadow-md hover:shadow-xl shadow-[#aac0ffac] hover:shadow-[#ffaaaaac] border-2 border-blue-500 hover:border-red-500 min-w-[150px] flex flex-col rounded-2xl text-white'>
            <div className="md:w-[200px] md:h-[150px] w-full h-[150px] overflow-hidden flex justify-center items-center">
                {props.imgUrl && <CldImage
                    width="400"
                    height="400"
                    src={props.imgUrl}
                    sizes="100vw"
                    alt=""
                    className="md:w-[200px] md:h-[150px] w-full h-[150px]  rounded-t-2xl "
                />}
            </div>
            <div className='flex flex-col p-4 gap-2'>
                <h2 className='relative font-bold flex justify-between'>
                    <div className=''>{props.title ?? '---'}</div>
                    <div onClick={handleAddToCart} className='absolute transition-all -top-[30px] right-0 cursor-pointer border-2 border-red-500 hover:scale-[1.1] hover:rotate-90 bg-white p-2 rounded-full'>
                        <FaPlus className=' text-red-500 h-4 w-4 md:h-5 md:w-5' size={20}/>
                    </div>
                </h2>
                <div className='flex gap-2 items-center justify-between'>
                    <div className='flex gap-2 items-center'>
                        <FaWeight className='opacity-50' size={10}/>
                        <p className='text-[12px] font-thin'>{props.weight ?? '---'}</p>
                    </div>
                        <h2 className='font-bold'><span className='font-medium text-[10px]'>Rs</span> {props.price ?? '---'}</h2>
                </div>
            </div>
        </div>
    )
}

export default HorizontalItem
