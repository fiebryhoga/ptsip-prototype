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
      <div className="flex flex-row w-full justify-center items-center h-72 relative mt-20 mb-20">
        <div className="w-full h-full absolute mt-1 bg-black">
          <img
            className="w-full h-full object-cover opacity-90"
            src="/assets/image/bg-faq2.png"
            alt=""
          />
        </div>
        <div className="z-10 flex flex-col justify-center items-center w-full h-full gap-4 text-white">
          <h1 className="text-4xl font-semibold">
            Mechanical, Construction, and Lifting
          </h1>
          <p className="text-center text-sm font-medium px-96">
            This core service category covers structural erection, mechanical
            works, equipment installation, piping, and heavy lifting, both
            on-shore and off-shore. PT Sarana Inti Perwira delivers precise,
            safe, and integrated solutions for industrial and infrastructure
            projects.
          </p>
        </div>
      </div>
      {/* <HeroService /> */}
      <MechanicalSection />

      <Footer />
    </div>
  );
};

export default MechanicalService;
