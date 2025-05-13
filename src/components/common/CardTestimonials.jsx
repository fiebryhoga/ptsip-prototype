import React from "react";
import { FaStar } from "react-icons/fa6";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const CardTestimonials = ({ name, date, message, initial, stars, link }) => {
  return (
    <div className="max-w-64 border border-gray-300 rounded-lg hover:scale-105 my-2 transition-all hover:transition-all duration-300 hover:duration-300 ease-in-out hover:ease-in-out bg-white p-6 space-y-4 h-64 mb-2">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 flex items-center justify-center bg-[#00662C]/80 text-white text-lg font-semibold rounded-full">
          {initial}
        </div>
        <div>
          <div className="text-gray-900 font-medium">{name}</div>
          <div className="text-gray-600 text-sm">{date}</div>
        </div>
      </div>

      <div className="flex text-amber-500 text-xl space-x-1">
        {[...Array(stars)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

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

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium cursor-pointer hover:text-[#00662C] text-gray-400"
      >
        Read more
      </a>
    </div>
  );
};

export default CardTestimonials;