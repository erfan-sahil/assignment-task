import { ChevronDown, Search } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex justify-center items-center py-20 bg-sky-50">
      <div className="">
        <div className="flex justify-center items-center">
          <div className="bg-white rounded-md text-black p-5 w-[600px]">
            <div className="flex items-center justify-between gap-20">
              <h1 className="text-xl font-bold">Choose Service</h1>
              <div className="bg-zinc-200 px-4 gap-2 py-2 rounded-md text-black flex justify-center items-center">
                <Search className="h-6 w-g" />
                <p>Search Services</p>
              </div>
            </div>

            <div className="flex justify-between items-center border-2 border-gray-200 rounded-md px-4 mt-5 py-2">
              <div className="">
                <p>Default</p>
                <small>9 Services</small>
              </div>
              <ChevronDown className="w-6 h-6" />
            </div>
            <div className="flex justify-between items-center border-2 border-gray-200 rounded-md px-4 mt-4 py-2">
              <div className="">
                <p>Tutoring</p>
                <small>3 Services</small>
              </div>
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center min-w-[500px]">
        <div className="bg-white rounded-md text-black p-5 min-h-[200px] min-w-[300px]">
          <h1 className="border-b border-gray-200 text-lg font-bold py-3">
            Book Details
          </h1>
          <div className="">
            <p className="text-gray-500 border-b border-gray-200 py-2">
              Service
            </p>
            <p className="text-gray-500 border-b border-gray-200 py-2">
              Employee
            </p>
            <p className="text-gray-500 border-b border-gray-200 py-2">
              Location
            </p>
            <p className="text-gray-500 border-b border-gray-200 py-2">
              Date & Time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
