import React from "react";
import { RiBuilding3Fill } from "react-icons/ri";
import CardEquipment from "@/components/common/CardEquipment";

const ListEquipment = () => {
  return (
    <div className="px-36 flex flex-col jutsify-center items-center w-full pb-20">
      <div className="flex flex-row gap-4 rounded-full px-10 py-2 bg-[#00662C]/10">
        <RiBuilding3Fill size={22} color="#00662C" />
        <p className="text-sm font-semibold text-[#00662C]">
          List of Equipment
        </p>
      </div>
      <div className="grid grid-cols-3 mt-4 gap-10 pt-10">
        <CardEquipment/>
        <CardEquipment/>
        <CardEquipment/>
        <CardEquipment/>
        <CardEquipment/>
        <CardEquipment/>
        <CardEquipment/>
        <CardEquipment/>
      </div>
    </div>
  );
};

export default ListEquipment;
