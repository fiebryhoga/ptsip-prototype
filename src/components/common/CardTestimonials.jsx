// src/components/common/CardTestimonials.jsx

import React from "react";
import { FaStar } from "react-icons/fa6";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const CardTestimonials = ({ name, date, message, initial, stars, link }) => {
  return (
    <div
      className="group w-full max-w-xs border border-gray-200 rounded-lg 
                 hover:shadow-xl hover:border-gray-300 hover:scale-[1.03] 
                 transition-all duration-300 ease-in-out bg-white 
                 p-5 sm:p-6 flex flex-col min-h-[16rem] h-full mx-auto"
    >
      {/* --- Bagian Header: Avatar & Nama --- */}
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 flex items-center justify-center bg-[#00662C]/80 text-white text-lg font-semibold rounded-full flex-shrink-0">
          {initial}
        </div>
        <div className="overflow-hidden">
          <div className="text-gray-900 font-medium truncate">{name}</div>
          <div className="text-gray-600 text-sm">{date}</div>
        </div>
      </div>

      {/* --- Bagian Bintang Penilaian --- */}
      <div className="flex text-amber-500 text-xl space-x-1 mt-4">
        {[...Array(stars)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      {/* --- Bagian Pesan/Kutipan --- */}
      <div className="flex-grow my-4">
        <p
          className="text-gray-700 relative pl-6 pr-2 text-sm"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          <BiSolidQuoteAltLeft className="absolute left-0 top-1 text-[#00662C] text-xl" />
          {message}
        </p>
      </div>

      {/* --- Bagian Link "Read more" --- */}
      <div className="mt-auto">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-400 group-hover:text-[#00662C] transition-colors duration-300"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default CardTestimonials;
