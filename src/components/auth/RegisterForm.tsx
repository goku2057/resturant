'use client'

import Image from "next/image";
import React,{useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);

    const router = useRouter();

    const validateEmail = (email: string) => {
        // Regular expression for email validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setCreatingUser(true);

        if(!name || !email || !password){
            setError("Please fill all fields!!!");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            setCreatingUser(false);
            return;
        }

        // Validate minimum password length
        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }

        try {
            // Check if user already exists
            const resUser = await fetch('api/userExists', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            })

            const { user } = await resUser.json();

            if( user ) {
                setError("User already Exists!!!");
                alert("User already Exists!!!")
            }

            const res = await fetch('api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            })

            if(res.ok){
                const form = e.target;
                form.reset();
                router.push('/login');
                alert("Successfully Created User");
                setCreatingUser(false);
            } else {
                console.log("User registration failed");
            }
        } catch (error) {
            console.log("Error during registration", error);
        }

        router.push('/login')
    }

    return (
        <div className="relative flex justify-center items-center h-[100vh] bg-primaryColor text-white">

<div className='z-1'>
                <Image draggable={false} className='h-56 w-auto unselectable absolute top-10 md:left-10 filter blur-[5px]' src='/assets/images/login/burgur1.png' height={50} width={300} alt='burgur'></Image>
                <Image  draggable={false}  className='h-56 w-auto hidden md:block unselectable absolute bottom-10 right-10 filter blur-[5px]' src='/assets/images/login/burgu2.png' height={50} width={300} alt='burgur'></Image>
                <Image  draggable={false}  className='h-56 w-auto hidden md:block unselectable absolute top-10 right-10 filter blur-[5px]' src='/assets/images/login/pizza1.png' height={50} width={300} alt='burgur'></Image>
                <Image  draggable={false}  className='h-56 w-auto unselectable absolute bottom-10 md:left-10 filter blur-[5px]' src='/assets/images/login/pizza5.png' height={50} width={300} alt='burgur'></Image>
            </div>

            <div className="z-10 w-64 p-4 bg-gray-800 shadow-lg rounded-lg  border-t-4 border-blue-900">
                <form onSubmit={handleSubmit} >
                <h2 className="text-2xl font-bold mb-4">Signup</h2>
                <div className="mb-4">
                <input
                    type="text"
                    className="w-full p-2 bg-gray-800  border-b-[1px]   border-gray-500 focus:border-gray-300 rounded outline-none"
                    placeholder="Full Name"
                    disabled={creatingUser}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </div>
                {/* <div className="mb-4">
                <input
                    type="number"
                    className="w-full p-2 bg-gray-800  border-b-[1px]   border-gray-500 focus:border-gray-300 rounded outline-none"
                    placeholder="Number"
                    disabled={creatingUser}
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                </div> */}
                <div className="mb-4">
                <input
                    type="email"
                    className="w-full p-2 bg-gray-800  border-b-[1px]   border-gray-500 focus:border-gray-300 rounded outline-none"
                    placeholder="Email"
                    value={email}
                    disabled={creatingUser}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
            
                <div className="mb-4">
                <input
                    type="password"
                    className="w-full p-2 bg-gray-800  border-b-[1px]   border-gray-500 focus:border-gray-300 rounded outline-none"
                    placeholder="Password"
                    value={password}
                    disabled={creatingUser}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <button
                type="submit"
                disabled={creatingUser}
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                >
                Sign up
                </button>
                {error && <h2 className="text-red-500 mt-2 py-2 rounded text-sm">{error}</h2>}
                <p className="flex text-[12px] justify-between my-5">
                    Doesn't have an account?
                    <Link href="/login" className="font-bold text-blue-500 mr-5">
                        Login
                    </Link>
                </p>
                </form>
                {/* <div onClick={() =>  signIn('google')} className='bg-gray-200  text-black p-2  rounded-2xl cursor-pointer hover:shadow-md mt-5 flex items-center justify-center gap-2 text-[10px] font-bold'><FcGoogle size={20}/>Sign in using google</div> */}
            </div>
        </div>
    );
}

export default RegisterForm;