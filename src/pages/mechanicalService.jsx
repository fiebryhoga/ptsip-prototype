import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroService from "@/components/sections/service/HeroService";
import MechanicalSection from "@/components/sections/service/MechanicalSection";

const MechanicalService = () => {
  return (
    <div
      className={` flex flex-col justify-start items-start bg-white min-h-[100vh]`}
    >
      <Navbar />
      <HeroService/>
      <MechanicalSection/>

      <Footer />
    </div>
  );
};

export default MechanicalService;
