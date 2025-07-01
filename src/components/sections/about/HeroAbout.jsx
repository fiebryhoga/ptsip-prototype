import React from 'react'

const HeroAbout = () => {
  return (
    <div className="flex flex-row w-full justify-start items-center h-screen relative">
     

      <div className="w-full h-full bg-black absolute">
        <img
          src="/assets/image/service/img1.jpg"
          className="w-full h-full object-cover opacity-50 "
          alt=""
        />
      </div>
      <div className="w-2/3 mt-10 h-full flex flex-col justify-center items-start gap-10 z-10 px-36">
        <h2 className="text-6xl text-white font-semibold">About Us</h2>
        <p className="text-lg font-medium text-white text-justify">
          PT Sarana Inti Perwira is a trusted Heavy Lifting Specialist in
          Indonesia with extensive experience in mechanical construction and
          lifting services, both onshore and offshore. We have successfully
          handled a wide range of major projects from infrastructure and power
          plant installations to heavy equipment rental, supported by a skilled
          and dedicated team. With a strong focus on safety, quality, and smart
          problem solving, we are committed to delivering professional,
          efficient, and innovative solutions. Guided by the belief to "solve
          problems without causing any problem," we aim to be more than just a
          service provider, we are a strategic partner in every project we
          undertake.
        </p>
      </div>
    </div>
  );
}

export default HeroAbout