'use client'

import { FunctionComponent, useState } from "react";
import MethodHeader from "../component/Header/MethodHeader";
import Image from "next/image";
import Link from 'next/link'

import { useAppSelector } from "@/hook/redux-toolkit/store";

import table2c from '../../../public/assets/images/table2c.png'

interface Props {
}
 
const YourReserve: FunctionComponent<Props> = () => {
     const [selectedDate, setSelectedDate] = useState(new Date());
    const { status, tableName, seat } = useAppSelector((state) => state.customerTableReducer.value)

    const reservationDetails = {
        date : selectedDate.toDateString(),
        time: `${selectedDate.getHours()} : ${selectedDate.getMinutes()}`,
        nos: seat,
        tableNo: tableName,
    }

    return ( 
        <div className="bg-primaryColor h-screen flex flex-col">
            <MethodHeader/>
            <div className="flex-1 px-5 h-full pt-16 md:mx-60  flex flex-col justify-center">
                <p className="text-gray-800 text-sm">Hello, Satish</p>
                <h1 className="text-black text-3xl">Your reservations</h1>

                <div className=" bg-gray-700 flex flex-col items-center md:items-start md:pl-10 rounded-lg mt-5 py-5">
                    <h2 className="text-white text-[12px]">Glideheart Restaurant, Hetauda</h2> 
                    <div className="mt-5 flex items-center">
                        <Image src={table2c} width={100} height={40} alt="table2" className="md:w-[100px]"/>
                        <div className="text-[10px] text-gray-300 ml-5 flex flex-col gap-2">
                            <p>Date</p>
                            <p>Time</p>
                            <p>Seats</p>
                            <p>Table</p>
                        </div>
                        <div className="text-[12px] text-gray-300 ml-5 flex flex-col gap-2">
                            <h2>{reservationDetails.date}</h2>
                            <h2>{reservationDetails.time}</h2>
                            <h2>{reservationDetails.nos}</h2>
                            <h2>{reservationDetails.tableNo}</h2>
                        </div>
                    </div>
                </div>
                <div className="transition-all text-gray-600 flex justify-center my-10 hover:scale-[1.04] cursor-pointer">
                    <Link href="/">
                        <p className="bg-gray-800 px-7 rounded py-2 text-white text-sm font-semibold">Order food</p>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default YourReserve;