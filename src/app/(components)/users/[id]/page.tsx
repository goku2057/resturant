'use client'

import React, { useEffect, useState } from 'react'
import { FaPeopleArrows} from 'react-icons/fa'
import {useParams} from 'next/navigation'
import MethodHeader from '@/components/component/Header/MethodHeader'

const page = () => {
  // const [user, setUser] = useState(null)
  // const {id} = useParams();

  // const purchaseHistoryList = [
  //   {
  //     items: ['Veg momo', 'Chicken momo', 'Pizza'],
  //     totalPrice: 1120,
  //     status: 'Paid'
  //   },
  //   {
  //     items: ['Large pizza', 'Chicken momo', 'etc...'],
  //     totalPrice: 1500,
  //     status: 'Pending'
  //   },
  //   {
  //     items: ['Pizza'],
  //     totalPrice: 200,
  //     status: 'Paid'
  //   },
  //   {
  //     items: ['Burger'],
  //     totalPrice: 450,
  //     status: 'Paid'
  //   },
  //   {
  //     items: ['Chicken pizza'],
  //     totalPrice: 650,
  //     status: 'Paid'
  //   }
  // ];

  // useEffect(() => {
  //   fetch('/api/users').then(res => {
  //     res.json().then(users => {
  //       const user = users.find((u: any ) => u._id === id)
  //       setUser(user)
  //     })
  //   })
  // }, [])

  return (
    <>
     <h1 className='h-screen flex justify-center items-center text-black '>User Details Page</h1>
    {/* <div ><MethodHeader/></div>
    <div className='min-h-[10vh]'></div>
    <div className='h-[90vh]  grid items-center gap-2 md:grid-cols-3'>
      <div className='col-span-1 '>
        <div className='flex items-center justify-center gap-3'>
          <FaPeopleArrows className="p-2 rounded-[50%]  bg-red-600 text-white" size={50}/>
          <div className='flex flex-col justify-center'>
            <span className='font-semibold'>{user?.name}</span>
            <span className='text-sm '>{user?.email}</span>
          </div>
        </div>
      </div>
      
      <div className='col-span-2 p-4 m-2 bg-red-200 rounded-lg mr-20'>
        <div className='font-bold text-center text-3xl text-[#704444a4] mb-7 mt-3'>Order history</div>
        <div className='flex text-sm flex-col gap-2'>
          {purchaseHistoryList.map((item, index) => (
            <div key={index} className='p-2 bg-red-100 items-center grid grid-cols-3 text-center rounded-lg'>
              <p>{item.items.join(', ')}</p>
              <p className='font-semibold'>Rs. {item.totalPrice}</p>
              <p className={`p-2 bg-gray-500 rounded-md ${item.status === 'Paid' ? 'bg-green-400' : 'bg-red-400'}`}>{item.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div> */}
  </>
  )
}

export default page
