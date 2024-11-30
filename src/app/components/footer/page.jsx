import Image from "next/image";
import React from "react";
import icon from "../../../../public/image 1.png";
import footerImg from "../../../../public/Vector.png";
const page = () => {
  return (
    <div className="bg-blue-500 py-10 px-10 flex flex-col justify-between h-[300px]">
      <Image alt="icon" src={icon} className="h-[70px] w-[150px]" />

      <div className="flex items-center justify-around">
        <div className="mt-5">
          <h1 className="font-semibold">Quick Link</h1>
          <div className="mt-5">
            <p>About</p>
            <p>Services</p>
            <p>Partnership</p>
            <p>Packages</p>
            <p>Meet Our Team</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="font-semibold">Services</h1>
          <div className="mt-5">
            <p>5 days intensive</p>
            <p>Intensive</p>
            <p>Test Prem</p>
            <p>Scholarship</p>
            <p>Interships</p>
            <p>Events</p>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="font-semibold">Country</h1>
          <div className="mt-5">
            <p>Saudi</p>
            <p>UAE</p>
            <p>Oman</p>
            <p>India</p>
            <p>Meet Our Team</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
