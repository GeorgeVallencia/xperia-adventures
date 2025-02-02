import React from "react";
import { Search } from "lucide-react";

function NavBar() {
  return(
    <div className="flex justify-between font-bold py-3 px-3 items-center mx-auto max-w-5xl">
      <div>
        <p className="cursor-pointer">logo</p>
      </div>
      <div className="space-x-8 px-3 flex items-center">
        <button className="cursor-pointer">Home</button>
        <button className="cursor-pointer">Video</button>
        <button className="cursor-pointer">About Us</button>
        <button className="cursor-pointer">Contact</button>
        <button className="cursor-pointer">< Search size={22} className=''/></button>
      </div>
    </div>
  );
}

export default NavBar;