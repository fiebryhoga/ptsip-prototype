import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MechanicalSection from "@/components/sections/service/MechanicalSection";

const MechanicalService = () => {
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
            Mechanical, Construction, and Lifting
          </h1>
          <p className="text-center text-sm font-medium max-w-4xl">
            This core service category covers structural erection, mechanical
            works, equipment installation, piping, and heavy lifting, both
            on-shore and off-shore. PT Sarana Inti Perwira delivers precise,
            safe, and integrated solutions for industrial and infrastructure
            projects.
          </p>
        </div>
      </div>
      <MechanicalSection />

      <Footer />
    </div>
  );
};

export default MechanicalService;
