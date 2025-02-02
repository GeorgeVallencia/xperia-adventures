import React from "react";
import { Search } from "lucide-react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";


function Home() {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return(
    <div className="bg-[url('https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center min-h-screen flex flex-col items-center font-bold mx-auto max-w-5xl">
      <div className="flex text-white justify-between font-bold py-5 px-6 items-center mx-auto w-full max-w-6xl">
        <div>
          <p className="cursor-pointer text-xl">logo</p>
        </div>
        <div className="hidden space-x-8 md:space-x-6 sm:space-x-4 md:flex items-center">
          <button className="cursor-pointer">Home</button>
          <button className="cursor-pointer">Video</button>
          <button className="cursor-pointer">About Us</button>
          <button className="cursor-pointer">Contact</button>
          <button className="cursor-pointer">< Search size={22} className=''/></button>
        </div>
        <div onClick={handleNav} className='block md:hidden'>
          { !nav ? <IoMdCloseCircleOutline size={22} /> : <AiOutlineMenu size={22} className='font-bold' /> }
        </div>
        <div className={!nav ? 'flex flex-col fixed left-0 top-0 h-full w-[80%] border-r-gray-900 bg-cyan-500 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <button className="cursor-pointer text-xl mb-10 px-4 border-gray-600">logo</button>
            <button className="cursor-pointer my-3 px-4 border-gray-600">Home</button>
            <button className="cursor-pointer my-3 px-4 border-gray-600">Video</button>
            <button className="cursor-pointer my-3 px-4 border-gray-600">About Us</button>
            <button className="cursor-pointer my-3 px-4 border-gray-600">Contact</button>
        </div>
      </div>
      <div className="mt-48 text-[8rem] md:text-[12rem] sm:text-[8rem] text-center text-white sm:mx-4">
        <p>Nature</p>
      </div>
      <div className="my-10 italic text-3xl text-white text-center sm:my-10">
        <p>With</p>
      </div>
      <div className="my-20 sm:my-32 px-20 md:px-28 sm:px-18 py-2 text-white tracking-[0.4rem] max-w-lg bg-cyan-500 text-center sm:mx-4 md:mx-10">
        <p>XPERIA ADVENTURES</p>
      </div>
    </div>
  );
}

export default Home;