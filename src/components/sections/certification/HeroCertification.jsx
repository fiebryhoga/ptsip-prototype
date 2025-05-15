import React from 'react'

const HeroCertification = () => {
  return (
    <div className="py-40 pt-60 flex flex-row w-full px-36">
      <div className="flex flex-col gap-12 justify-center items-start w-3/5">
        <h1 className="text-6xl font-semibold text-[#00662C] leading-16">
          Our Certifications
        </h1>
        <p className="pr-24 text-justify text-base font-medium">
          Our certifications reflect our unwavering commitment to quality,
          safety, and professionalism in every project we undertake. They serve
          as a testament to our compliance with national and international
          standards in construction and engineerin.
        </p>
        <a
          className="px-10 py-3 rounded-lg bg-[#00662C] text-white border border-[#00662C]/40 hover:bg-transparent hover:text-[#00662C]"
          href=""
        >
          Contact Us for Detail
        </a>
      </div>
      <div className="w-2/5 flex flex-row justify-center items-center">
        <img src="/assets/image/cer3.png" alt="" />
      </div>
    </div>
  );
}

export default HeroCertification
