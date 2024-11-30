import React from "react";
import icon from "../../../../public/image 1.png";
import Image from "next/image";
const Header = () => {
  return (
    <div className="bg-transparent flex justify-between items-center mx-20 py-4">
      <Image alt="icon" className="h-[50px] w-[160px]" src={icon}></Image>

      <div>
        <ul className="flex items-center gap-8">
          <li className="text-black text-lg">Home</li>
          <li className="text-black text-lg">About</li>
          <li className="text-black text-lg">Service</li>
          <li className="text-black text-lg">Events</li>
        </ul>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button className="text-black">Sign up</button>
        <button className="bg-blue-500 text-white rounded-md px-4 py-2">
          LOG IN
        </button>
      </div>
    </div>
  );
};

export default Header;
