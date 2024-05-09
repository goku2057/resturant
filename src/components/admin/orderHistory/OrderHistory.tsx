'use client'

import React from 'react'
import OrderList from './orderList/OrderList';

const OrderHistory = () => {

  return (
    <div className='relative text-white '>
        <div className='hide-scroolbar  flex-[7_7_0%]  overflow-scroll'>
            <OrderList />
        </div>
    </div>
  )
}

export default OrderHistory