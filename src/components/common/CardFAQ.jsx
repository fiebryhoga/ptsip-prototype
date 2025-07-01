import React, { useState } from "react";

// 1. Pastikan komponen menerima { question, answer }
const CardFAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border border-green-700/40 rounded-xl text-base text-green-700 font-semibold">
      <div
        onClick={toggleOpen}
        className="flex flex-row gap-4 cursor-pointer hover:bg-green-700/10 transition-all duration-300 ease-in-out justify-start items-center py-4 px-4"
      >
        {/* Ikon SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>

        {question}
      </div>

      {isOpen && (
        <div className="px-12 py-2 pb-4 text-green-900 font-normal">
          {answer}
        </div>
      )}
    </div>
  );
};

export default CardFAQ;
