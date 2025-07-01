import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroService from '@/components/sections/service/HeroService';
import FieldofBusinessSection from '@/components/sections/service/FieldofBusinessSection';

const fieldBusiness = () => {
  return (
    <div
      className={` flex flex-col justify-start items-start bg-white min-h-[100vh]`}
    >
      <Navbar />
      <div className="flex flex-row w-full justify-center items-center h-72 relative mt-20 mb-20">
        <div className="w-full h-full absolute mt-1 bg-black">
          <img
            className="w-full h-full object-cover opacity-90"
            src="/assets/image/bg-faq2.png"
            alt=""
          />
        </div>
        <div className="z-10 flex flex-col justify-center items-center w-full h-full gap-4 text-white">
          <h1 className="text-4xl font-semibold">Field of Bussiness</h1>
          <p className="text-center text-sm font-medium px-96">
            PT Sarana Inti Perwira operates across a wide range of industries,
            including power plants, concrete production facilities, and material
            handling systems. We also provide services in infrastructure
            development, such as bridges, toll roads, and jetties alongside
            piling work for land, on-shore, and off-shore projects. Additional
            fields include heavy equipment rental (crane), warehouse
            construction, and professional lifting consultancy, offering
            tailored solutions for both industrial and infrastructure sectors.
          </p>
        </div>
      </div>
      {/* <HeroService /> */}
      <FieldofBusinessSection />

      <Footer />
    </div>
  );
}

export default fieldBusiness
