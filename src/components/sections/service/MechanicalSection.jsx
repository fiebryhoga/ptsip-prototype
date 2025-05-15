import React from 'react';
import { RiBuilding3Fill } from "react-icons/ri";
import CardService from '@/components/common/CardService';
import { IoIosArrowRoundForward } from "react-icons/io";

const MechanicalSection = () => {
  return (
    <div className="flex flex-col w-full justify-start items-center px-36 py-10">
      <div className="flex flex-row gap-4 rounded-full px-10 py-2 bg-[#00662C]/10">
        <RiBuilding3Fill size={22} color="#00662C" />
        <p className="text-sm font-semibold text-[#00662C]">
          Mechanical, Construction and Lifting
        </p>
      </div>
      <div className="w-full grid grid-cols-2 py-8 gap-10">
        <CardService />
        <CardService />
        <CardService />
        <CardService />
        <CardService />
      </div>
      <div className="">
        <a
          className="group flex flex-row font-normal text-sm justify-center items-center py-2 px-6 gap-4 bg-[#00662C] text-white rounded-4xl hover:bg-transparent hover:text-[#4F7303] transition-colors ease-in-out duration-500 border border-[#00662C]/20"
          href=""
        >
          Go to Field of Bussiner Service <IoIosArrowRoundForward />
        </a>
      </div>
    </div>
  );
}

export default MechanicalSection