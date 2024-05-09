'use client'

import {  FaWeight } from 'react-icons/fa';
import {AiOutlineFullscreenExit} from 'react-icons/ai'
import { useAppSelector } from '@/hook/redux-toolkit/store';
import { useEffect, useState } from 'react';
import { CldImage } from 'next-cloudinary';
// import ChangeConformation from '@/components/component/ConfirmationDialog/ChangeConformation';

function AdminOrderDetails({selectedOrder}: any) {
    const [pending, setPending] = useState(false);
    const [conform, setConform] = useState(false);

    const selectedOrderFromRedux = useAppSelector(state => state.orderReducer.value)
   
    // Calculate total price, tax, and grand total dynamically
    useEffect(() => {
      const calculateTotal = () => {
        if (Array.isArray(selectedOrderFromRedux.dish)) {
            const subtotal = selectedOrderFromRedux.dish.reduce((acc, product) => {
                return acc + parseFloat(product.price);
            }, 0);

            const tax = subtotal * 13 / 100;
            const deliveryFee = 0;

            const grandTotal = subtotal + tax + deliveryFee;

            setTotalPrice(subtotal);
            setTax(tax);
            setGrandTotal(grandTotal);
            };
        };

    calculateTotal();
  }, [selectedOrderFromRedux.dish]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

    const handlePending = () => {
        if(selectedOrderFromRedux.status == false)
            setPending(true)
    }

    const handlePaid = async (id: string) => {
        setConform(true);

        await fetch('/api/checkout', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
            }),
        })

        // handleConform(id)
    }

    // const hideConform = () => {
    //     setConform(false);
    // }
    
    // const handleConform = async (id: string) => {

    //     if(id){
    //         await fetch('/api/checkout', {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 id,
    //             }),
    //         })
    //     } else {
    //         console.log('no id');
    //     }

    //     hideConform()
    //     setPending(false)
    // }

    return (
        <div className='text-black  md:h-screen flex flex-col md:justify-between gap-5 md:gap-0 md:mr-5'>
            {/* {conform && (
                <div>
                    <ChangeConformation onCancel={hideConform} onConfirm={handleConform}/>
                </div>
            )} */}
            <div className='shadow-sm shadow-[#00000075] bg-white  flex flex-col px-5 mt-5 py-5'>
                <div>
                    <div className='flex flex-col justify-between '>
                        <div className='flex justify-between items-center ' >
                            <div className='flex items-center gap-3'>
                                <div className={`bg-[#e9485088] text-white uppercase font-bold text-[16px] rounded-[50%] p-2 flex items-center h-[2rem] w-[2rem] justify-center`}>
                                {selectedOrderFromRedux && selectedOrderFromRedux.face  }
                            </div>
                                <h2 className='text-sm font-bold'>{selectedOrderFromRedux && selectedOrderFromRedux.customerName}</h2>
                            </div>
                            <div className={`relative flex flex-col gap-3 ${pending && 'border-2 border-gray-500 p-2 rounded-md'}`}>
                                {!pending && 
                                    <div
                                        onClick={handlePending}
                                        className={`relative gap-2 text-white cursor-pointer text-[12px] px-5 py-1 rounded flex justify-center items-center z-[0] ${selectedOrderFromRedux && selectedOrderFromRedux.status == true? 'bg-[#50af50d7]' : 'bg-[#e04949dc]'}`}
                                    >
                                        <div 
                                            onClick={() => setPending(false)}
                                            className=' z-10  '
                                        >
                                            <AiOutlineFullscreenExit size={20}/>
                                        </div>
                                        <p>{ selectedOrderFromRedux.status == false ? 'Pending' : 'Paid'}</p>
                                    </div>
                                }
                                { pending && (
                                    <div className='flex justify-center items-center gap-2'>
                                        <div 
                                            onClick={() => setPending(false)}
                                            className=' z-10  '><AiOutlineFullscreenExit size={20}/></div>
                                        <div 
                                            onClick={() => handlePaid(selectedOrderFromRedux.id)}
                                            className={`relative text-white cursor-pointer text-[12px] px-5 py-1 rounded flex justify-center items-center bg-[#50af50d7]`}
                                        >
                                            <p>Paid</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='border-b-[1px] border-gray-500/60 mt-7 mb-5'></div>
                    </div>
                    <div>
                    </div>
                </div>
                <div>
                    <div className='h-40  overflow-y-scroll flex flex-col  gap-5 mb-5 '>
                        {(Array.isArray(selectedOrderFromRedux.dish) ? selectedOrderFromRedux.dish : []).map((product, index) => (
                            <div key={index} className='flex flex-row  items-center gap-5 border-b border-gray-600/30 pb-2'>
                                {/* Render the product image */}
                                <div>
                                {product.imgUrl && <CldImage
                                        width="100"
                                        height="100"
                                        src={product.imgUrl}
                                        sizes="100vw"
                                        alt={product.title}
                                        className="w-16 h-12 rounded-full"
                                    />}
                                </div>
                                {/* Render product details */}
                                <div className='flex flex-col gap-2 w-full justify-center rounded-r-2xl'>
                                    <h2 className='font-bold text-sm'>{product.title}</h2>
                                    <div className='flex gap-2 items-center justify-start'>
                                        <FaWeight className='opacity-50' size={10} />
                                        <p className='text-[12px] font-medium'>{product.weight}</p>
                                        <h2 className='text-[12px] font-bold'>{product.price}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Total Payment */}
            <div className='shadow-sm shadow-[#00000075] bg-white px-10 pt-5 mb-20 md:mb-5 '>
                <div>
                <div className='flex justify-between items-center mx-5' >
                        <h2 className='text-[12px] font-semibold'>Total Payment</h2>
                    <p className='cursor-pointer text-[12px]  px-2 py-1 border-[1px] flex justify-center items-center border-gray-600'>COD</p>
                </div>

                <div className='border-b-[1px] border-gray-500/40 mt-4 mx-5'></div>

                <div className='p-5 '>
                <div className='flex justify-between '>
                    <h3 className=' text-[14px]'>Subtotal</h3>
                    <h3 className=' text-[14px] font-semibold'>Rs &nbsp; {totalPrice}</h3>
                </div>
                <div className='px-5'>
                    <div className='flex justify-between mt-4'>
                        <h3 className='text-gray-800 font-semibold text-[12px]'>Tax</h3>
                        <h3 className='text-gray-800 font-semibold text-[12px]'>Rs {tax}</h3>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <h3 className='text-gray-800 font-semibold text-[12px]'>Delivery Fee</h3>
                        <h3 className='text-gray-800 font-semibold text-[12px]'>Rs 0</h3>
                    </div>
                    </div>
                    {/* DIVIDER */}
                    <div className='border-gray-700/30 border-t-2 mb-2 mt-3'></div>
                        <div className='flex justify-between mt-4'>
                            <h3 className='font-bold text-[13px]'>Grand Total</h3>
                            <h3 className=' font-semibold'>Rs &nbsp; {grandTotal}</h3>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default AdminOrderDetails
