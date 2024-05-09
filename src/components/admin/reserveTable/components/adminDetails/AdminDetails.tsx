import { useAppSelector } from '@/hook/redux-toolkit/store';
import {  FaWeight } from 'react-icons/fa';

function AdminDetails({ selectedTable }: any) {
    const imgUrl = '/assets/images/momov.jpg';
    const price = 'Rs 100';
    const weight = '1 plate';

    const bookedItems = [
        {
            title: 'Veg Momo, Pure vegitarian momo',
            weight: '1 plate',
            imgUrl: '/assets/images/momov.jpg',
            price: 'Rs 100',
        },
        {
            title: 'Buff Momo, Tasty buff momo',
            weight: '1 plate',
            imgUrl: '/assets/images/momoc.jpg',
            price: 'Rs 120',
        },
    ]

    const totalPrice = 120;
    const tax = totalPrice * 13/100;
    const GrandTotal = totalPrice + tax + 99;

    const selectedTableFromRedux = useAppSelector((state) => state.tableReducer.value)

    return (
        <div className='md:h-screen flex flex-col md:justify-center gap-5 md:gap-0 md:mr-5'>
            <div className='bg-white text-black flex flex-col px-5 mt-5 py-5'>
                <div>
                    <div className='flex flex-col justify-between '>
                        <div className='flex justify-between items-center ' >
                            <h2 className='text-xl font-semibold mb-2  '>{selectedTableFromRedux ?  selectedTableFromRedux.tableName : 'Table'}</h2>
                        <p className={`cursor-pointer text-[12px] p-2 border-[1px] flex justify-center font-bold items-center border-gray-800 ${selectedTableFromRedux && selectedTableFromRedux.status == 'available'? 'text-[#305230]': 'text-adminredColor'}`}>{selectedTableFromRedux ?  selectedTableFromRedux.status : 'available'}</p>
                        </div>
                        <div className='border-b-[1px] border-gray-800 mt-7 mb-5'></div>
                    </div>
                    <div>

                    </div>
                </div>

                <div>
                    <div className='h-40 hide-scroolbar overflow-y-scroll flex flex-col justify-center gap-10 mb-5'>
                        {selectedTableFromRedux.dish.map((item, index) => (
                            <div key={index}>
                                <div className='  flex flex-row  rounded-2xl items-center gap-5'>
                                <div className='h-[40px] w-[50px]  flex items-center justify-center rounded-[50%] bg-center bg-cover' style={{ backgroundImage: `url(${imgUrl})`}}></div>
                                
                                
                                <div className='flex flex-col gap-2 w-full justify-center rounded-r-2xl'>
                                    <h2 className='font-black text-[16px]'>{item}</h2>
                                    <div className='flex gap-2 items-center justify-start'>
                                        <FaWeight className='opacity-50' size={10}/>
                                        <p className='text-[12px] font-semibold'>{weight}</p>
                                        <h2 className='text-[12px] font-black'>{price}</h2>
                                    </div>
                                </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className='border-b-2 border-gray-800'></div>

            {/* Total Payment */}
            <div className='bg-white text-black px-10 pt-5 mb-32 md:mb-5'>
                <div>
                <div className='flex justify-between items-center mx-5' >
                        <h2 className='text-[12px] font-black'>Total Payment</h2>
                    <p className='cursor-pointer text-[12px]  px-2 border-[1px] flex justify-center items-center border-gray-800 font-bold'>Esewa</p>
                </div>

                <div className='border-b-[1px] border-gray-500 mt-4 mx-5'></div>

                <div className='p-5 '>
                <div className='flex justify-between '>
                    <h3 className='text-black font-bold text-[14px]'>Subtotal</h3>
                    <h3 className='text-black font-bold text-[14px] f'>Rs &nbsp; {totalPrice}</h3>
                </div>
                <div className='px-5'>
                    <div className='flex justify-between mt-4'>
                        <h3 className='text-gray-800 font-bold text-[12px]'>Tax</h3>
                        <h3 className='text-gray-800 font-bold text-[12px]'>Rs {tax}</h3>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <h3 className='text-gray-800 font-bold text-[12px]'>Delivery Fee</h3>
                        <h3 className='text-gray-800 font-bold text-[12px]'>Rs 99</h3>
                    </div>
                    </div>
                    {/* DIVIDER */}
                    <div className='border-gray-700 border-t-2 mb-2 mt-3'></div>
                        <div className='flex justify-between mt-4'>
                            <h3 className='text-black font-bold text-[13px]'>Grand Total</h3>
                            <h3 className='text-black font-semibold'>Rs &nbsp; {GrandTotal}</h3>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default AdminDetails
