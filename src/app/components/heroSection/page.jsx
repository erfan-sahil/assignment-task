import React from "react";
import heroImage from "../../../../public/Hero background.png";
import Image from "next/image";
const page = () => {
  return (
    <div className="relative">
      <Image
        src={heroImage}
        alt="Hero"
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-start justify-center text-start text-white bg-blue-800 bg-opacity-50 px-10 w-[700px]">
        <p className="text-6xl font-bold mb-2">Innovation Education Solution</p>
        <p className=" mb-4 text-2xl">
          Empowering Learning with Modern Tools and Strategies
        </p>

        <button className="bg-white text-blue-500 px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition font-bold">
          Book Your Free Consultation
        </button>
      </div>
    </div>
  );
};

export default page;
