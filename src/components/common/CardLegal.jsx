import React from "react";

const CardLegal = ({ title, description, icon: Icon }) => {
  return (
    <div className="flex flex-row gap-1 justify-start items-center w-full">
      <div className="mr-2">{Icon && <Icon size={40} color="#00662C" />}</div>
      <div className="w-full flex flex-col gap-0 tracking-widest justify-center items-start">
        <h1 className="text-base font-semibold tracking-wide text-[#00662C]">{title}</h1>
        <p className="text-sm font-normal text-black">{description}</p>
      </div>
    </div>
  );
};

export default CardLegal;
