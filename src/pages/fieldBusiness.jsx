import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FieldofBusinessSection from '@/components/sections/service/FieldofBusinessSection';

const fieldBusiness = () => {
  return (
    <div
      className={` flex flex-col justify-start items-start bg-white min-h-[100vh]`}
    >
      <Navbar />
      
      <div className="flex flex-row w-full justify-center items-center h-80 sm:h-72 relative mt-20">
        <div className="w-full h-full absolute top-0 left-0 bg-black">
          <img
            className="w-full h-full object-cover opacity-90"
            src="/assets/image/bg-faq2.png"
            alt=""
          />
        </div>
        <div className="z-10 flex flex-col justify-center items-center w-full h-full gap-4 text-white text-center px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Field of Bussiness
          </h1>
          <p className="text-center text-sm font-medium max-w-4xl">
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
      <FieldofBusinessSection />

      <Footer />
    </div>
  );
}

export default fieldBusiness
