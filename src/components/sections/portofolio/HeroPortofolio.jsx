import React from 'react'

const HeroPortofolio = () => {
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
        <h1 className="text-4xl font-semibold">Project Portfolio </h1>
        <p className="text-center text-sm font-medium px-96">
          Explore our proven track record through a selection of completed
          projects across various industries. From heavy lifting operations and
          mechanical installations to complex infrastructure developments, our
          portfolio demonstrates our capability, precision, and commitment to
          safety in every job we undertake.
        </p>
      </div>
    </div>
  );
}

export default HeroPortofolio
