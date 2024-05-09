import MethodHeader from "@/components/component/Header/MethodHeader";
import Link from "next/link";
import { FunctionComponent, useContext } from "react";
import {FaStar} from 'react-icons/fa'

interface Props {
    
}
 
const ItemPage: FunctionComponent<Props> = () => {


    return ( 
        <div className="bg-primaryColor flex flex-col justify-between min-h-screen text-black">
            {/* Header */}
            <div ><MethodHeader /></div>
            
            {/* Lower Section */}
            <div className=" flex flex-col items-center " >
                <div className='flex w-full h-full flex-col items-center justify-center  md:w-[200px] min-h-[50vh] md:min-h-[20vh]  md:mt-20 bg-center bg-cover md:bg-contain' style={{ backgroundImage: `url(/assets/images/momoc.jpg)`}}></div>

                <div className="flex w-full flex-col items-center justify-center -mt-10 pt-10 rounded-t-3xl bg-primaryColor">
                    <h2 className="text-2xl mb-5">Veg Momo</h2>
                    <div className="flex items-center gap-5  mb-5">
                        <div className="flex gap-2">
                            <FaStar className="text-yellow-300" size={15}/>
                            <FaStar className="text-yellow-300" size={15}/>
                            <FaStar className="text-yellow-300" size={15}/>
                            <FaStar className="text-yellow-300" size={15}/>
                            <FaStar className="text-gray-300" size={15}/>
                        </div>
                        <h2>4.7</h2>
                    </div>
                    <h1 className="text-3xl">Rs 80 <span className="ml-2 text-[14px] text-gray-600 line-through">rs 120</span> </h1>
                    <p className="text-center p-5 text-[12px] font-medium  ">
                        Serves in a plate with achar, Chutney and Onion Chutney. Momo is high in carbonhydrates and contains no added sugars or saturated fats.
                    </p>

                    <div className="flex gap-16 text-sm text-black font-semibold">
                        <ul className="list-disc">
                            <li>Whole Urad Dal</li>
                            <li>Salt</li>
                        </ul>
                        <div>
                            <ul className="list-disc">
                            <li>Chatney</li>
                            <li>Wheat powder</li>
                        </ul>
                        </div>
                    </div>

                    {/* Order now button */}
                    <div className='py-5 bg-secondaryColor mt-8 flex justify-center items-center  md:mx-60 md:rounded-3xl  w-full'> 
                        <Link href="/cart">
                            <button  className='transition-all text-white  bg-gray-800 py-3 px-16 rounded-2xl hover:shadow-2xl hover:scale-105'>
                                ADD TO CART
                            </button>  
                        </Link>  
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default ItemPage;