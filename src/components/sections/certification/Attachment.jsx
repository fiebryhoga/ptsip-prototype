import React from "react";
import { RiBuilding3Fill } from "react-icons/ri";
import ContainerCertificate from "@/components/common/ContainerCertificate";

const Attachment = () => {
  return (
    <div className="px-36 flex flex-col justify-center items-center w-full pb-20">
      <div className="flex flex-row gap-4 rounded-full px-10 py-2 bg-[#00662C]/10">
        <RiBuilding3Fill size={22} color="#00662C" />
        <p className="text-sm font-semibold text-[#00662C]">Attachment</p>
      </div>
      <div className="grid grid-cols-3 justify-center items-center gap-10 py-10 w-full">
        <ContainerCertificate/>
        
      </div>
    </div>
  );
};

export default Attachment;