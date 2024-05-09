import Image from "next/image";
import Link from "next/link";

import orderfood from '../../../public/assets/images/orderfood.png';
import takeaway from '../../../public/assets/images/takeaway.png';
import reservetable from '../../../public/assets/images/reservetable.png';


const MethodChoose = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-primaryColor items-center justify-center gap-10">
        <div>
          {/* Replace this Method Choose with Notification Section about each of these parts.
            When clicked opens that section

            this applies only for admin panel
        */}
        </div>

        <div className=' flex flex-col md:flex-row gap-10'>
          <Link href='/'>
            <div className='transition-all hover:shadow-xl hover:scale-[1.02] w-40 flex flex-col items-center justify-center bg-[#581515]  rounded-2xl cursor-pointer'>
              <div className='h-32 bg-red-400 w-full rounded-t-2xl flex flex-col justify-center items-center'>
                <Image width={200} src={orderfood} alt="orderfood"/>
              </div>
              <div className='px-5 py-3 text-sm font-bold text-white'>ORDER FOOD</div>
            </div>
          </Link>
          {/*
            Merging this with order food section
          <Link href='/takeAway'>
            <div className='transition-all hover:shadow-xl hover:scale-[1.02] w-40 flex flex-col items-center justify-center bg-[#064e06] rounded-2xl cursor-pointer'>
              <div className='h-32 bg-[#93bb93] w-full rounded-t-2xl flex flex-col justify-center items-center'>
                <Image width={200} src={takeaway} alt="orderfood"/>
              </div>
              <div className='px-5 py-3 text-sm font-bold text-white'>TAKE AWAY</div>
            </div>
          </Link> */}
          <Link href='/reserveTable'>
            <div className='transition-all hover:shadow-xl hover:scale-[1.02] w-40 flex flex-col items-center justify-center bg-[#155658] rounded-2xl cursor-pointer'>
              <div className='h-32 bg-[#2baeb3] w-full rounded-t-2xl flex flex-col justify-center items-center'>
                <Image width={100} src={reservetable} alt="orderfood"/>
              </div>
              <div className='px-5 py-3 text-sm font-bold text-white'>RESERVE TABLE</div>
            </div>
          </Link>
        </div>

        <div>
          <p className='text-sm text-gray-600  '>Choose a method.</p>
        </div>
    </div>
    </>
  )
}

export default MethodChoose;