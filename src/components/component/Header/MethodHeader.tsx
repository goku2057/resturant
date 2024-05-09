'use client'

import Link from 'next/link';

import { FaHome , FaShoppingBag } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import {BsHandIndex,BsPersonFillGear} from 'react-icons/bs'
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '@/components/appContext';

interface MethodHeaderProps {
}

const MethodHeader: React.FC<MethodHeaderProps> = () => {
  const [userInfo, setUserInfo] = useState('')

  const {cartProducts}: any = useContext(CartContext);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('/api/menu/profile');
        if (!response.ok) {
          throw new Error('Failed to fetch user information');
        }
        const data = await response.json();
        setUserInfo(data.data.message);
        
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchUserInfo();
  }, [])

  return (
    <div className='text-white fixed z-20 h-16 w-full px-5 p-5 md:px-20 bg-gray-800 border-b-[1px] border-gray-600'>
      <div className='flex justify-between '>
        <div className='flex items-center gap-10'>
            <Link href='/'> <FaHome size={30}/> </Link>
        </div>
        <div className='flex gap-5 items-center'>
              <Link href='/cart'> 
                <div className='relative'>
                  <FaShoppingBag size={20}/>
                  <div className='absolute text-sm  flex justify-center items-center bg-red-800 rounded-[50%] h-5  w-5 text-center -mt-2 ml-2 text-white'>{cartProducts.length}</div>
                </div>
              </Link>
            <Link href='/reserveTable'> <BsHandIndex size={20}/> </Link>
            {userInfo !=='verified' && (
              <Link href='/sign-in'>
                <p className='transition-all flex gap-2 justify-center items-center py-1 px-3 bg-[white] text-[#ff6600] hover:text-white hover:bg-[#ff6600] rounded-md text-sm font-semibold hover:rounded'>
                  SignIn<BsPersonFillGear size={15}/>
                </p>
              </Link> 
            )}

            {userInfo === 'verified' &&  (
              <Link href='/profile'>  
                <FaPerson size={20} />
              </Link>
            )}
        </div>
      </div>
    </div>
  )
}

export default MethodHeader
