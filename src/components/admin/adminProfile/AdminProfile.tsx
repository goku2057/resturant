'use client'

import { FunctionComponent, useState } from "react";
import AdminMenu from "../components/adminMenu/AdminMenu";
import {getProfile} from "@/hook/useProfile";
import { UserButton, SignOutButton } from "@clerk/nextjs";

interface AdminPageProps {
}
 
const AdminProfile: FunctionComponent<AdminPageProps> = () => {
    const { data: profileData }: any = getProfile();
    
    const userName = profileData?.data?.message?.firstName;
    const userEmail = profileData?.data?.message?.emailAddresses[0]?.emailAddress;

    return (  
        <>
        <div className='bg-adminbgColor'>
            <div className='relative md:gap-10 h-screen flex flex-col-reverse md:flex-row md:justify-between text-white '>
                {/* Admin Menus */}
                <div className='flex-1 bg-admindarkColor flex  md:relative top-0'>
                    <AdminMenu />
                </div>
                {/* Admin Items */}
                <div className='flex-[11_11_0%]'>
                     <div className="h-screen flex flex-col justify-center items-center pt-20 md:pt-0">
                    <div className={`bg-[#41ad4110] text-[40px] scale-150 rounded-[50%] p-2 flex items-center`} >
                        <UserButton afterSignOutUrl="/"/>
                    </div>
                    <h1 className="font-semibold text-4xl md:text-3xl text-adminblueColor mt-5">{userName}</h1>
                    <p className="text-gray-400 text-xl md:text-sm mt-2">{userEmail}</p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
        </>
    );
}
 
export default AdminProfile;