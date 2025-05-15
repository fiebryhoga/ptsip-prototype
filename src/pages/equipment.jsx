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
      <HeroEquipment/>
      <ListEquipment/>
      <Footer />
    </div>
  );
}

export default Equipment