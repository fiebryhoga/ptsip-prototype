import React, { useState } from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const CardFAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border border-green-700/40 rounded-xl text-sm text-green-700 font-semibold">
      <div
        onClick={toggleOpen}
        className="flex flex-row gap-4 cursor-pointer hover:bg-green-700/10 transition-all duration-300 ease-in-out justify-start items-center py-4 px-4"
      >
        <IoMdArrowDroprightCircle
          size={20}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        />
        Apa sebenarnya PT SIP itu?
      </div>

      {isOpen && (
        <div className="px-12 py-2 pb-4 text-green-900 font-normal">
          PT SIP (Sistem Informasi Pintar) adalah perusahaan yang bergerak di
          bidang pengembangan solusi digital berbasis data dan teknologi untuk
          meningkatkan efisiensi dan produktivitas organisasi.
        </div>
      )}
    </div>
  );
};

export default CardFAQ;
