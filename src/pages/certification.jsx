import React from 'react'
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroCertification from '@/components/sections/certification/HeroCertification';
import LegalInformation from '@/components/sections/certification/LegalInformation';
import Attachment from "@/components/sections/certification/Attachment";


const Certification = () => {
  return (
    <div
      className={` flex flex-col justify-start items-start bg-white min-h-[100vh]`}
    >
      <Navbar />
      <HeroCertification />
      <LegalInformation />
      <Attachment/>
      {/* <ListEquipment /> */}
      <Footer />
    </div>
  );
}

export default Certification