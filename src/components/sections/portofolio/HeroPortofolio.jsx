// src/components/sections/portofolio/HeroPortofolio.jsx

import React from "react";

const HeroPortofolio = () => {
  return (
    <div className="flex flex-row w-full justify-center items-center h-80 sm:h-72 relative mt-20">
      {/* Background Image */}
      <div className="w-full h-full absolute top-0 left-0 bg-black">
        <img
          className="w-full h-full object-cover opacity-90"
          src="/assets/image/bg-faq2.png"
          alt="Portfolio Background"
        />
      </div>

      {/* Konten Teks */}
      <div className="z-10 flex flex-col justify-center items-center w-full h-full gap-4 text-white text-center px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Project Portfolio
        </h1>
        <p className="text-center text-sm font-medium max-w-4xl">
          Explore our proven track record through a selection of completed
          projects across various industries. From heavy lifting operations and
          mechanical installations to complex infrastructure developments, our
          portfolio demonstrates our capability, precision, and commitment to
          safety in every job we undertake.
        </p>
      </div>
    </div>
  );
};

export default HeroPortofolio;
