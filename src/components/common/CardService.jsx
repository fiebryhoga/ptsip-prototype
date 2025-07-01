import React from "react";

// Menerima props untuk gambar, judul, dan deskripsi
const CardService = ({ imageUrl, title, description }) => {
  return (
    <div
      className="w-full flex flex-row rounded-xl h-52 shadow-md
                    hover:transform hover:scale-105 hover:duration-300 duration-300 ease-in-out hover:ease-in-out hover:transition-all 
                    transition-all shadow-black/20"
    >
      <div className="bg-gray-100 w-2/5 rounded-l-xl overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-l-xl"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="w-3/5 flex flex-col border border-[#00662C]/10 rounded-r-xl px-6 py-6 gap-4 justify-start">
        <div className="flex flex-col justify-start items-start gap-6">
          <h3 className="text-[#00662C] text-lg font-semibold">
            {title}
          </h3>
          <p className="text-sm font-normal text-[#403601] text-justify line-clamp-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardService;
