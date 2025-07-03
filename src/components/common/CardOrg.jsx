// src/components/common/CardOrg.jsx

import React from "react";

const CardOrg = ({ name, position, imageUrl }) => {
  return (
    // Ukuran dibuat fleksibel, bukan lagi fixed w-64 h-16
    <div className="bg-gray-100 w-full max-w-xs sm:max-w-sm md:max-w-[280px] h-auto flex flex-row justify-start items-center rounded-full py-2 px-3 gap-3 shadow-md mx-auto">
      <div className="w-12 h-12 rounded-full flex-shrink-0">
        <img
          src={imageUrl}
          className="w-full h-full object-cover rounded-full"
          alt={name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/60";
          }}
        />
      </div>
      <div className="flex flex-col justify-center items-start overflow-hidden">
        <p className="font-semibold text-black line-clamp-1 text-base">
          {name}
        </p>
        <p className="text-gray-600 text-xs line-clamp-1">{position}</p>
      </div>
    </div>
  );
};

export default CardOrg;
