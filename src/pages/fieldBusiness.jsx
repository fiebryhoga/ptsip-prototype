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
      <HeroService/>
      <FieldofBusinessSection/>
      
      <Footer />
    </div>
  );
}

export default fieldBusiness
