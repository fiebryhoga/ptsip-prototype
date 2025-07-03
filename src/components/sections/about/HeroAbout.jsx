// src/components/sections/about/HeroAbout.jsx

import React from "react";

const HeroAbout = () => {
  return (
    <div className="flex flex-row w-full justify-start lg:justify-start items-center min-h-screen relative">
      {/* Background Image Overlay */}
      <div className="w-full h-full bg-black absolute top-0 left-0">
        <img
          src="/assets/image/service/img1.jpg"
          className="w-full h-full object-cover opacity-50"
          alt="About Us Background"
        />
      </div>

      {/* Konten Teks */}
      <div className="w-full lg:w-2/3 flex flex-col justify-center items-center lg:items-start gap-8 z-10 px-4 sm:px-8 md:px-20 lg:px-36 text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-semibold">
          About Us
        </h2>
        <p className="text-base sm:text-lg font-medium text-white text-justify max-w-3xl">
          PT Sarana Inti Perwira is a trusted Heavy Lifting Specialist in
          Indonesia with extensive experience in mechanical construction and
          lifting services, both onshore and offshore. We have successfully
          handled a wide range of major projects from infrastructure and power
          plant installations to heavy equipment rental, supported by a skilled
          and dedicated team. With a strong focus on safety, quality, and smart
          problem solving, we are committed to delivering professional, -
          efficient, and innovative solutions. Guided by the belief to "solve
          problems without causing any problem," we aim to be more than just a
          service provider, we are a strategic partner in every project we
          undertake.
        </p>
      </div>
    </div>
  );
};

export default HeroAbout;
