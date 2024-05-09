'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useState } from 'react';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loginProcess, setLoginProcess] = useState(false)

    const validateEmail = (email: string) => {
        // Regular expression for email validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoginProcess(true)

        // Validate email format
        // if (!validateEmail(email)) {
        //     setError("Please enter a valid email address.");
        //     setLoginProcess(false);
        //     return;
        // }

        // await signIn('Credentials', {email, password, callbackUrl:'/'})
        // setLoginProcess(false)
    } 

    return (
        <div className="relative flex justify-center items-center h-[100vh] bg-primaryColor text-white">

            <div className='z-1'>
                <Image draggable={false} className='h-56 w-auto unselectable absolute top-10 left-10 filter blur-[5px]' src='/assets/images/login/burgur1.png' priority height={50} width={300} alt='burgur'></Image>
                <Image  draggable={false}  className='h-56 w-auto hidden md:block unselectable absolute bottom-10 right-10 filter blur-[5px]' src='/assets/images/login/burgu2.png' height={50} width={300} alt='burgur'></Image>
                <Image  draggable={false}  className='h-56 w-auto hidden md:block unselectable absolute top-10 right-10 filter blur-[5px]' src='/assets/images/login/pizza1.png' height={50} width={300} alt='burgur'></Image>
                <Image  draggable={false}  className='h-56 w-auto unselectable absolute bottom-10 left-10 filter blur-[5px]' src='/assets/images/login/pizza5.png' height={50} width={300} alt='burgur'></Image>
            </div>
        
        <div className="z-10 w-64 p-4 bg-gray-800 shadow-lg rounded-lg border-t-4 border-blue-900">
            <form  onSubmit={handleSubmit} >
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <div className="mb-4">
                <input
                    type="text"
                    required
                    name='email'
                    disabled={loginProcess}
                    className="w-full p-2 bg-gray-800  border-b-[1px]   border-gray-500 focus:border-gray-300 rounded outline-none"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className="mb-4">
                <input
                    type="password"
                    name='password'
                    required
                    disabled={loginProcess}
                    className="w-full bg-gray-800 p-2  border-b-[1px]  border-gray-500 focus:border-gray-300 rounded outline-none"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <button
                type="submit"
                disabled={loginProcess}
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none "
                >
                Login
                </button>
                {error && <h2 className="text-red-500 mt-2 py-2 rounded text-sm">{error}</h2>}
                <p className="flex text-[12px] justify-between my-5">
                    Doesn't have an account?
                    <Link href="/register" className="font-bold text-blue-500 mr-5">
                        Signup
                    </Link>
                </p>
            </form>
            {/* <button type='button' onClick={() =>  signIn('google')} className='bg-gray-200 w-full text-black p-2  rounded-2xl cursor-pointer hover:shadow-md mt-5 flex items-center justify-center gap-2 text-[10px] font-bold'><FcGoogle size={20}/>Sign in using google</button> */}
        </div>
        </div>
    );
}

export default LoginForm
