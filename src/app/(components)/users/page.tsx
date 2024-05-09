'use client'

import MethodHeader from '@/components/component/Header/MethodHeader';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

interface User {
    _id: string;
    name: string;
    email: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('/api/users')
    .then((response) => {
        response.json().then(users => {
            setUsers(users)
        })
    })
  }, [])

  return (
    <div>
        <div ><MethodHeader/></div>
        <div className='min-h-[10vh]'></div>
        <div className='flex flex-col justify-center items-center'>
        
        <h1 className='font-bold text-lg p-5 uppercase'>users page</h1>
        <div className='px-5'>
            {users?.length > 0 &&
                users.map(user => (
                    <div key={user._id} className='grid bg-gray-300  rounded-lg mb-2 p-4'>
                        <div className='grid items-center grid-cols-3 gap-10 px-5'>
                            <span className='font-bold'>{user.name}</span>
                        
                            <span className='text-sm text-gray-500 font-semibold'>{user.email}</span>
                            <Link href={`/users/`+user._id}>
                               <p className='transition-all  text-white bg-gray-600 text-center hover:bg-red-400 hover:text-white text-sm rounded-lg font-semibold p-2'>Details</p>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    </div>
  )};

export default UsersPage