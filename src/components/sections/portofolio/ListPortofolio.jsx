import React from "react";
import { RiBuilding3Fill } from "react-icons/ri";
import CardProject from "@/components/common/CardProject";



const ListPortofolio = () => {
  return (
    <div className="w-full py-20 flex flex-col px-36 justify-center items-center gap-10">
      <div className="flex flex-row gap-4 rounded-full px-10 py-2 bg-[#00662C]/10">
        <RiBuilding3Fill size={22} color="#00662C" />
        <p className="text-sm font-semibold text-[#00662C]">
          Portofolio Project's
        </p>
      </div>
      <h1 className="text-[#00662C] text-3xl font-semibold">Successful Projects We've Handled</h1>
      <div className="grid grid-cols-2 gap-10 justify-center items-center w-full">
        <CardProject/>
        <CardProject/>
        <CardProject/>
        <CardProject/>

      </div>
    </div>
  );
};

export default ListPortofolio;
