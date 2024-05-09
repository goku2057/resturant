'use client'

import { FaTrash } from 'react-icons/fa';
import {useState, useContext} from 'react'
import { CldImage } from 'next-cloudinary';
import { z } from 'zod';

import MethodHeader from '../component/Header/MethodHeader';
import { CartContext } from '../appContext';

interface MethodHeaderProps{
}

const CartComponent: React.FC<MethodHeaderProps> = (props) => {
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [disableBtn, setDisableBtn] = useState(true);

    const { cartProducts, removeCartProduct }: any = useContext(CartContext);
    let total = 0;
    for( const p of cartProducts) {
        total += p.price;
    }

    const phoneSchema = z.string().length(10).regex(/^\d+$/);
    const addressSchema = z.string().min(3);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const phoneNumber = e.target.value;
        setPhone(phoneNumber);

        try {
            phoneSchema.parse(phoneNumber);
            if (address.length > 2) {
                setDisableBtn(false);
            } else {
                setDisableBtn(true);
            }
        } catch (error) {
            setDisableBtn(true);
        }
    }

    const handelAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const addressLocation = e.target.value;
        setAddress(addressLocation);

        try {
            addressSchema.parse(addressLocation);
            
            if (phone.length === 9 || phone.length === 10) {
                setDisableBtn(false);
            } else {
                setDisableBtn(true);
            }
        } catch (error) {
            setDisableBtn(true);
        }
    }

    const handlePayment = async (e: any) => {
        e.preventDefault();

        try {
            phoneSchema.parse(phone);
            addressSchema.parse(address);
    
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone,
                    address,
                    cartProducts,
                }),
            });
    
            if (response.ok) {
                // redirect user to done payment page
                window.location.href = `/payment?clear-cart=1`;
            }
        } catch (error) {
            alert('Invalid input');
        }
    }

    return (
        <div className='relative min-h-[100vh] overflow-hidden bg-primaryColor flex flex-col'>
            {/* Header */}
            <div ><MethodHeader/></div>
            <div className='my-10'></div>
            <h1 className='text-red-600 text-center font-bold text-5xl my-5'>Cart</h1>
            
            <div className='flex md:flex-row flex-col m-2 md:m-0 sm:gap-0 gap-10 justify-around '>
                <div className='absolute bg-no-repeat bg-cover bg-center w-full h-full'  style={{ backgroundImage: 'url(/assets/images/bg/bg2.jpg)', filter: 'blur(8px)', zIndex: 0 }}>
                </div>
                <div className='flex flex-col z-[1] gap-2 '>
                    {cartProducts?.length === 0 && (
                        <div className='text-center'>No products in your shopping cart!!!</div>
                    )}

                    {cartProducts?.length > 0 && cartProducts.map((product: any, index: number) => (
                        <div key={index} className='flex bg-gray-800 text-white gap-5 shadow'>
                            <div className='grid grid-cols-4 w-[500px] items-center  border border-[#b9b9b9] py-2 px-5'>
                                <div className="">
                                    {product.imgUrl && <CldImage
                                        width="100"
                                        height="100"
                                        src={product.imgUrl}
                                        sizes="100vw"
                                        alt={product.title}
                                        className="w-16 h-16 rounded-full"
                                    />}
                                </div>
                                <div className='flex justify-start font-mono text-sm '>{product.title}</div>
                                <div className='font-semibold flex justify-end'>Rs. {product.price}</div>
                                <div className='flex justify-end'>
                                    <button 
                                        className=''
                                        type='button' 
                                        onClick={() => removeCartProduct(index)}>
                                        <FaTrash className="transition-all text-white hover:text-red-500 hover:scale-[1.4]" size={25}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {cartProducts?.length > 0 && (
                        <div className='grid grid-cols-4 md:w-[500px] items-center  border shadow-sm border-[#b9b9b9] py-2 px-5'>
                        <span></span>
                        <span>subtotal</span>
                        <span className='flex justify-end font-bold '>Rs {total} </span> 
                        </div>
                    )}
                </div>
                
                {cartProducts?.length > 0 && (
                    <div className='bg-gray-200 p-4 z-[1] rounded-sm'>
                    <h2 className='font-bold mb-4'>Checkout</h2>
                        <form onSubmit={handlePayment}>
                            <label className='text-gray-600 text-sm mt-2'>Phone</label> <br />
                            <input  value={phone} onChange={handlePhoneChange} className='p-2 w-full md:w-auto rounded-lg m-2 outline-none font-bold' type="number" pattern="[0-9]{10}" placeholder='977*******' required/> <br />
                            <label className='text-gray-600 text-sm mt-2'>Address</label> <br />
                            <input value={address} onChange={handelAddressChange} className='p-2 w-full md:w-auto rounded-lg m-2 outline-none font-bold' type="text"  placeholder='location' required/> <br />
                            <label className='text-gray-600 text-sm mt-2'>Payment Option</label> <br />
                            <input className='p-2 w-full md:w-auto rounded-lg m-2 outline-none font-bold' type="radio" name='payment' />  <label className='text-gray-600 text-sm mt-2'>COD</label> <br />
                            <input className='p-2 w-full md:w-auto rounded-lg m-2 outline-none font-bold' type="radio" name='payment' disabled/> <label className='text-gray-600 text-sm mt-2 line-through'>Esewa</label> <br />
                            {true && (
                                <button className={`py-2 px-5 rounded text-white w-full mt-5 ${disableBtn  === true ? 'bg-gray-600' : 'bg-red-500'}`} disabled={disableBtn}  type='submit'>
                                Pay <span className='font-normal text-[10px] text-gray-200'>Rs</span> {total}
                                </button>
                            )}
                            
                        </form>
                    </div>
                )}
                
            </div>

        </div>
    )
}

export default CartComponent
