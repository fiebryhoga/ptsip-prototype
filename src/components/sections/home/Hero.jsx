// src/components/sections/home/Hero.jsx

import React, { useContext } from "react";
import { DataContext } from "@/context/DataContext"; // Impor DataContext

const Hero = () => {
  // Ambil data dari context
  const { contactInfo, loading } = useContext(DataContext);
  const whatsAppNumber = contactInfo?.nomor_wa;

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center w-full min-h-screen not-[]:md:min-h-[80vh] lg:h-[90vh] mt-10 md:mt-20 px-4 sm:px-8 md:px-24 xl:px-36 gap-10 text-center lg:text-left">
      {/* Kolom Teks */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-8">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-tight">
          Professional
          <span className="text-[#00662C]"> Heavy Lifting Specialists</span> for
          Every Project Need
        </h1>
        <p className="text-lg sm:text-xl pr-0 lg:pr-4">
          Partner with us for comprehensive lifting, erection, and construction
          services tailored to diverse industry demands and project
          complexities.
        </p>

        <a
          href={
            !loading && whatsAppNumber ? `https://wa.me/${whatsAppNumber}` : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row font-normal text-base justify-center items-center py-3 px-10 gap-4 bg-[#00662C] text-white rounded-4xl hover:bg-transparent hover:text-[#4F7303] transition-colors ease-in-out duration-500 border border-[#00662C]"
        >
          Contact Us
        </a>
      </div>

      {/* Kolom Gambar */}
      <div className="w-full lg:w-1/2 p-8 flex justify-center items-center">
        <img
          src="/assets/image/bg-equipment.png"
          alt="Equipment Background"
          className="max-w-xs sm:max-w-sm lg:max-w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
