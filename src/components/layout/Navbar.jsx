import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";


export default function Navbar() {

  return (
    <div
      className={`font-sans flex flex-row justify-between items-center fixed px-36 py-4 w-full bg-white/50 shadow shadow-gray-400/10 z-10`}
    >
      <div className="h-12">
        <img className="h-full" src="/assets/image/logo2.png" alt="" />
      </div>
      <nav className="flex flex-row font-normal text-sm">
        <ul className="border-b-2 hover:border-b-[#4F7303] transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out h-10 px-4 flex flex-row justify-center items-center border-transparent">
          <a
            href=""
            className="cursor-pointer text-[#4F7303] font-medium hover:text-[#4F7303]"
          >
            Home
          </a>
        </ul>
        <ul className="border-b-2 hover:border-b-[#4F7303] transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out h-10 px-4 flex flex-row justify-center items-center border-transparent">
          <a
            href=""
            className="cursor-pointer text-[#4F7303] font-medium hover:text-[#4F7303]"
          >
            Portofolio
          </a>
        </ul>
        <ul className="border-b-2 hover:border-b-[#4F7303] transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out h-10 px-4 flex flex-row justify-center items-center border-transparent">
          <a
            href=""
            className=" flex flex-row gap-1 justify-center items-center cursor-pointer text-[#4F7303] font-medium hover:text-[#4F7303]"
          >
            Equipment & Certification <MdKeyboardArrowDown size={20} />
          </a>
        </ul>
        <ul className="border-b-2 hover:border-b-[#4F7303] transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out h-10 px-4 flex flex-row justify-center items-center border-transparent">
          <a
            href=""
            className="flex flex-row gap-1 justify-center items-center cursor-pointer text-[#4F7303] font-medium hover:text-[#4F7303]"
          >
            Product <MdKeyboardArrowDown size={20} />
          </a>
        </ul>
        <ul className="border-b-2 hover:border-b-[#4F7303] transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out h-10 px-4 flex flex-row justify-center items-center border-transparent">
          <a
            href=""
            className="cursor-pointer text-[#4F7303] font-medium hover:text-[#4F7303]"
          >
            FAQ's
          </a>
        </ul>
        <ul className="border-b-2 hover:border-b-[#4F7303] transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out h-10 px-4 flex flex-row justify-center items-center border-transparent">
          <a
            href=""
            className="cursor-pointer text-[#4F7303] font-medium hover:text-[#4F7303]"
          >
            Gallery
          </a>
        </ul>
      </nav>
      <div className="rounded-4xl text-white border border-[#4F7303]">
        <a
          href=""
          className="group flex flex-row font-normal text-sm justify-center items-center py-3 px-6 gap-4 bg-[#4F7303] text-white rounded-4xl hover:bg-transparent hover:text-[#4F7303] transition-colors ease-in-out hover:ease-in-out duration-500 hover:duration-500"
        >
          <BsFillTelephoneFill
            size={15}
            className="text-white group-hover:text-[#4F7303] transition-colors duration-500 hover:duration-500 ease-in-out hover:ease-in-out"
          />
          Contact Us
        </a>
      </div>
    </div>
  );
}

