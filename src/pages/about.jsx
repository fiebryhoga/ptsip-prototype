import React from "react";
// import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroAbout from "@/components/sections/about/HeroAbout";
import OrgChart from "@/components/sections/about/OrgChart";
import JustView from "@/components/sections/about/JustView";

import VisionMission from "@/components/sections/about/VisionMission";

// const OrgChart = dynamic(() => import("@/components/sections/about/OrgChart"), { ssr: false });

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <HeroAbout/>
      {/* <JustView/> */}
      <VisionMission/>
      <OrgChart/>
      <Footer />
    </div>
  );
};

export default About;