import React from 'react'

const HeroBlog = () => {
  return (
    <div className="flex flex-row w-full justify-center items-center h-72 relative mt-20">
      <div className="w-full h-full absolute mt-1 bg-black">
        <img
          className="w-full h-full object-cover opacity-90"
          src="/assets/image/bg-faq2.png"
          alt=""
        />
      </div>
      <div className="z-10 flex flex-col justify-center items-center w-full h-full gap-4 text-white">
        <h1 className="text-4xl font-semibold">Insights & Updates</h1>
        <p className="text-center text-sm font-medium px-96">
          Stay informed with the latest news, insights, and industry trends from
          our team. Our blog covers topics related to heavy lifting,
          construction safety, equipment innovations, and project highlights to
          keep you updated and engaged with our work and the world we operate
          in.
        </p>
      </div>
    </div>
  );
}

export default HeroBlog
