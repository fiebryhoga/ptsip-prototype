import React from 'react'

const HeroEquipment = () => {
  return (
    <div className="py-40 pt-60 flex flex-row w-full px-36">
      <div className="flex flex-col gap-12 justify-center items-start w-3/5">
        <h1 className="text-6xl font-semibold text-[#00662C] leading-16">
          Our Equipment Capabilities
        </h1>
        <p className="pr-24 text-justify text-base font-medium">
          At Sarana Inti Perwira, we are committed to operational excellence.
          Our equipment lineup is selected to meet the highest standards in
          heavy lifting, erection, construction, and installation works. Below
          is an overview of the tools and machinery that empower our field
          operations.
        </p>
        <a
          className="px-10 py-3 rounded-lg bg-[#00662C] text-white border border-[#00662C]/40 hover:bg-transparent hover:text-[#00662C]"
          href=""
        >
          Contact Us
        </a>

        
      </div>
      <div className="w-2/5 flex flex-row justify-center items-center">
        <img src="/assets/image/bg-equipment.png" alt="" />
      </div>
    </div>
  );
}

export default HeroEquipment
