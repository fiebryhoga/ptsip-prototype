import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroEquipment from '@/components/sections/equipment/HeroEquipment';
import ListEquipment from '@/components/sections/equipment/ListEquipment';

const Equipment = () => {
  return (
    <div
      className={` flex flex-col justify-start items-start bg-white min-h-[100vh]`}
    >
      <Navbar />
    <div className="flex flex-row w-full justify-center items-center h-80 sm:h-72 relative mt-20">
        <div className="w-full h-full absolute mt-1 bg-black">
          <img
            className="w-full h-full object-cover opacity-90"
            src="/assets/image/bg-faq2.png"
            alt=""
          />
        </div>
        <div className="z-10 flex flex-col justify-center items-center w-full h-full gap-4 text-white text-center px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Our Equipment Capabilities
          </h1>
          <p className="text-center text-sm font-medium max-w-4xl">
            At Sarana Inti Perwira, we are committed to operational excellence.
            Our equipment lineup is selected to meet the highest standards in
            heavy lifting, erection, construction, and installation works. Below
            is an overview of the tools and machinery that empower our field
            operations.
          </p>
        </div>
      </div>
      {/* <HeroEquipment /> */}
      <ListEquipment />
      <Footer />
    </div>
  );
}

export default Equipment