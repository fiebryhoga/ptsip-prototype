import React from "react";

const CardService = () => {
  return (
    <div className="w-xl flex flex-row rounded-xl h-52 hover:transform hover:scale-105 hover:duartion-300 duration-300 ease-in-out hover:ease-in-out hover:transition-all  transition-all shadow shadow-[##00662C]/10">
      <div className="bg-gray-100 w-2/5 rounded-l-xl">
        <img
          className="w-ful h-full object-cover rounded-l-xl "
          src="/assets/image/service/img1.jpg"
          alt=""
        />
      </div>
      <div className=" w-3/5 flex flex-col border border-[#00662C]/10 rounded-r-xl px-6 py-4 gap-4 justify-center">
        <div className="flex flex-col jutsify-center items-start gap-6">
          <h3 className="text-[#00662C] text-lg font-semibold  ">
            Power Plant
          </h3>
          <p className="text-sm font-normal text-[#403601] text-justify">
            We offer dependable and cost effective power generation services
            designed to support the operational needs of businesses and
            industries, ensuring a stable and continuous energy supply.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CardService;
