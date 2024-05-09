'use client'

import { FunctionComponent, useState, useEffect } from "react";
import {FaFirstOrder,FaPeopleGroup} from 'react-icons/fa6'
import Link from "next/link";
import MethodHeader from "../component/Header/MethodHeader";
import {getProfile} from "@/hook/useProfile";
import { UserButton, SignOutButton } from "@clerk/nextjs";

interface ClientProfileprops {
}

interface Product {
    imgUrl: string;
    title: string;
    weight: string;
    price: string;
    size: number | null;
}

interface OrderItem {
    email: string,
    phone: string,
    address: string,
    cartProducts: Product[],
    paid: boolean,
}
 
const ClientProfile: FunctionComponent<ClientProfileprops> = () => {

    const { data: profileData }: any = getProfile();
    
    const userName = profileData?.data?.message?.firstName;
    const userEmail = profileData?.data?.message?.emailAddresses[0]?.emailAddress;

    const [isAdmin, setIsAdmin] = useState(true)
    const [orderData, setOrderData] = useState<OrderItem[]>([]);
    const [selectedTable, setSelectedTable] = useState<number | null>(null);

    useEffect(() => {
        fetch('/api/order').then(response => {
            response.json().then(data => {
                setOrderData(data)
            })
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [])

    const handleSelection = (item: OrderItem, index: number) => {
        setSelectedTable(index)
    }

    const handleSignOut = async () => {
        // await signOut();
        // window.location.href = '/login';
    }

    return (  
        <>
        <div className='bg-primaryColor relative h-screen flex'>
            <div className='absolute  bg-no-repeat bg-cover bg-center w-full h-full z-[0]'  style={{ backgroundImage: 'url(/assets/images/bg/bg2.jpg)', filter: 'blur(20px)'}} />
            <div><MethodHeader /></div>
            
            <div className='z-[1] flex-[11_11_0%] flex flex-col md:flex-row justify-center items-center gap-20'>
                 <div className=" z-[1]  sm:h-screen flex flex-col justify-center items-center pt-20 md:pt-0">
                    {isAdmin && 
                        <div className="">
                            <Link href='/admin'>
                                <div className="flex items-center justify-center gap-2 px-5 text-white p-2 bg-gray-800 hover:scale-[1.1] transition-all rounded-md text-center mb-5">
                                    <p  className="text-2xl font-bold uppercase   ">Admin page</p>
                                </div>
                            </Link>
                            <Link href='/orderHistory'>
                                <div className="flex items-center justify-center gap-2 px-5 text-white p-2 bg-gray-800 hover:scale-[1.1] transition-all rounded-md text-center mb-5">
                                    <FaFirstOrder className=" text-green-500" size={30}/>
                                    <p  className="font-bold ">Order History</p>
                                </div>
                            </Link>
                            <Link href='/users'>
                                <div className="flex  items-center justify-center gap-2 hover:scale-[1.05] transition-all text-white p-2 bg-gray-800 rounded-md text-center font-bold mb-5">
                                    <FaPeopleGroup className='text-green-600'  size={30}/>
                                    <p>Clients</p>
                                </div>
                            </Link>
                        </div>
                    }

                    <div className="bg-green-200/30 rounded-2xl p-5">
                        <div className='flex justify-center p-1' >
                            <UserButton afterSignOutUrl="/"/>
                        </div>
                        <div className=" px-5 py-5 gap-5 ">
                            <p className=""><span className="text-sm text-gray-500">Username:</span> <span className="font-bold">{userName}</span></p>
                            <p className=""><span className="text-sm text-gray-500">email:</span> <span className="font-bold">{userEmail}</span></p>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            
                {!isAdmin && (
                    <div className="z-[1] flex justify-center items-center sm:h-screen">
                        <div className='flex flex-col items-center justify-center p-4 m-2 bg-[white] shadow-lg roounded rounded-lg md:mr-20'>
                            <div className='font-bold text-center text-3xl text-[#704444a4] mb-7 mt-3'>Order history</div>
                            <div className="hide-scroolbar  overflow-scroll ">
                            {orderData.map(( data, index) => (
                                <div 
                                key={index} 
                                className="">
                                    <div className={`transition-all order-list px-5 grid rounded-2xl grid-cols-3 border-b border-[#80808074] gap-10 items-center  py-3 ${selectedTable === index ? data?.paid == true ?  "bg-[#806dd4d5]" : "bg-[#eb5a5a9c]" : "" } ${data?.paid == true ? 'hover:bg-[#806dd4d5]' : 'hover:bg-adminredColor' }`}>
                                    <div className="md:mr-10 ml-5 md:ml-0">
                                        {data?.cartProducts.map((product, index) => (
                                            <div key={index}>
                                                <p className="!text-black">{product?.title}</p>
                                            </div>
                                        ))}
                                        
                                    </div>
                                    <div>
                                        <div className="!text-black !font-bold"> 
                                            <p className=" !text-black !font-bold">
                                                <span className="font-semibold text-[10px]">Rs </span> 
                                                {data?.cartProducts.reduce((acc, product) => acc + parseFloat(product.price), 0)}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p className={`cursor-pointer w-full !text-[10px] md:text-[12px] md:mr-10 px-5 py-1 rounded-2xl flex justify-center items-center  text-admingreenColor ${data.paid == true ? 'bg-[#50af50d7]': 'bg-[#e04949dc]'}`}>{data.paid == true ? 'paid' : 'Pending'}</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            
        </div>
        </>
    );
}
 
export default ClientProfile;