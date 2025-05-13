import React from 'react';
import { MdMiscellaneousServices } from "react-icons/md";
import CardService from '../common/CardService';


const Service = () => {
  return (
    <div className="flex flex-col w-full py-10 h-[100vh] items-center px-36 gap-10">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex flex-row gap-4 rounded-full px-10 py-2 mb-8  bg-[#4F7303]/10">
          <MdMiscellaneousServices size={22} color="#4F7303" />
          <p className="text-sm font-semibold text-[#4F7303]">Our Sevice</p>
        </div>
        <h2 className="text-4xl font-bold text-[#4F7303]">
          The Services We Provide
        </h2>
        <p className="text-sm font-normal px-60 text-center text-[#000000]">
          From mechanical and structural works to heavy lifting and logistics,
          we offer end-to-end industrial service solutions. Our lifting services
          are available for both on-shore and off-shore environments, handled
          with strict safety standards and technical excellence.
        </p>
      </div>
      <div className="grid grid-cols-2 justify-center items-center gap-10">
        <CardService />
        <CardService />
        <CardService />
        <CardService />
      </div>
      <div className="flex flex-row justify-center items-center">
        <a
          className="px-8 py-3 text-base font-medium text-white bg-[#4F7303] rounded-full hover:text-[#4F7303] hover:bg-transparent border border-[#4F7303] hover:transition-all hover:duration-300 duration-300 transition-all hover:ease-in-out ease-in-out" href=""
        >
          See More
        </a>
      </div>
    </div>
  );
}

export default Service
