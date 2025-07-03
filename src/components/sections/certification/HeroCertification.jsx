// src/components/sections/certification/HeroCertification.jsx

import React, { useContext } from "react";
import { DataContext } from "@/context/DataContext"; // Impor DataContext

const HeroCertification = () => {
  // Ambil data kontak langsung dari context
  const { contactInfo, loading } = useContext(DataContext);
  const whatsAppNumber = contactInfo?.nomor_wa;

  return (
    <div className="flex flex-col-reverse md:flex-row w-full px-4 sm:px-8 md:px-20 lg:px-24 xl:px-36 justify-center items-center h-screen md:h-[40vh] lg:h-[70vh] mt-10 md:mt-20 gap-20">
      {/* Kolom Teks */}
      <div className="flex flex-col gap-8 md:gap-10 lg:gap-16 justify-start items-start w-full md:w-3/5 md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#00662C] leading-tight">
          Our Certifications
        </h1>
        <p className="text-justify text-base font-medium lg:pr-12">
          Our certifications reflect our unwavering commitment to quality,
          safety, and professionalism in every project we undertake. They serve
          as a testament to our compliance with national and international
          standards in construction and engineering.
        </p>
        <a
          href={
            !loading && whatsAppNumber ? `https://wa.me/${whatsAppNumber}` : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-3 rounded-lg bg-[#00662C] text-white border border-transparent hover:bg-transparent hover:text-[#00662C] hover:border-[#00662C] transition-all duration-300 mx-auto md:mx-0"
        >
          Contact Us for Detail
        </a>
      </div>

      {/* Kolom Gambar */}
      <div className="w-full sm:w-4/5 md:w-2/5 flex justify-center items-center">
        <img
          src="/assets/image/cer3.png"
          alt="Certifications"
          className="max-w-xs md:max-w-full"
        />
      </div>
    </div>
  );
};

export default HeroCertification;
