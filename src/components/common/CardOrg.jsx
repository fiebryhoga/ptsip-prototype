import React from "react";

const CardOrg = ({ name, position, imageUrl }) => {
  return (
    // Ukuran disesuaikan: w-64 h-20 (saking w-80 h-24)
    <div className="bg-gray-100 w-64 h-16 flex flex-row justify-start items-center rounded-full py-2 px-3 gap-2 shadow-md">
      <div className="w-12 h-12 rounded-full flex-shrink-0">
        {" "}
        {/* Gambar uga disesuaikan ukurane */}
        <img
          src={imageUrl}
          className="w-full h-full object-cover rounded-full"
          alt={name}
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
