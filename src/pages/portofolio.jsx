import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroPortofolio from '@/components/sections/portofolio/HeroPortofolio';
import ListPortofolio from '@/components/sections/portofolio/ListPortofolio';

const Portofolio = () => {
  return (
    <div className={` flex flex-col justify-start items-start bg-white min-h-[100vh]`}>
      <Navbar />
      <HeroPortofolio/>
      <ListPortofolio/>      
      <Footer />
    </div>
  );
}

export default Portofolio
