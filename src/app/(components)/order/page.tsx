import React from 'react'
import { UserButton } from "@clerk/nextjs";

const Order = () => {
  
  return (
    <div className="h-screen flex gap-10 justify-center items-center">
      <p className='font-bold'>signout</p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default Order