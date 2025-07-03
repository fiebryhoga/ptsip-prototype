import React from "react";

const HeroBlog = () => {
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
          Insights & Updates{" "}
        </h1>
        <p className="text-center text-sm font-medium max-w-4xl">
          Stay informed with the latest news, insights, and industry trends from
          our team. Our blog covers topics related to heavy lifting,
          construction safety, equipment innovations, and project highlights to
          keep you updated and engaged with our work and the world we operate
        </p>
      </div>
    </div>
  );
};

export default HeroBlog;
