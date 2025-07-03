// src/components/sections/about/VisionMission.jsx

import React from "react";
import { RiBuilding3Fill } from "react-icons/ri";

const VisionMission = () => {
  return (
    <div className="flex flex-col justify-center items-start w-full px-4 sm:px-8 md:px-20 lg:px-36 py-20 bg-white gap-20">
      {/* --- Bagian Visi --- */}
      <div className="flex flex-col justify-center items-center w-full gap-12">
        <div className="flex flex-row justify-center items-center gap-4 rounded-full px-10 py-2 bg-[#00662C]/10">
          <RiBuilding3Fill size={22} color="#00662C" />
          <p className="text-lg font-semibold text-[#00662C]">Our Vision</p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full md:w-1/2 h-auto relative">
            <img
              src="/assets/image/service/img1.jpg"
              className="w-full h-72 object-cover rounded-xl shadow-lg"
              alt="Our Vision"
            />
          </div>
          <div className="flex flex-col gap-8 justify-center items-center w-full md:w-1/2 text-center md:text-left">
            <p className="text-green-800 font-semibold text-xl md:text-2xl font-sans text-justify">
              Become one of the best and most trusted Heavy Lifting Specialist
              Company in Indonesia
            </p>
            <p className="w-full font-sans font-medium text-sm text-justify">
              The vision reflects the company’s commitment to becoming a leader
              in Indonesia’s heavy lifting industry by consistently delivering
              high-quality services, upholding the highest safety standards, and
              building long-term trust with clients through professionalism,
              integrity, and reliable performance.
            </p>
          </div>
        </div>
      </div>

      {/* --- Bagian Misi --- */}
      <div className="flex flex-col justify-center items-center w-full gap-12">
        <div className="flex flex-row justify-center items-center gap-4 rounded-full px-10 py-2 bg-[#00662C]/10">
          <RiBuilding3Fill size={22} color="#00662C" />
          <p className="text-lg font-semibold text-[#00662C]">Our Mission</p>
        </div>
        {/* Layout grid dibuat responsif */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {/* Misi 1 */}
          <div className="w-full flex flex-col gap-4 justify-start items-center text-center">
            <img
              src="/assets/image/misi1.png"
              className="w-48 md:w-64"
              alt="Best Effort"
            />
            <div className="flex flex-col justify-start items-center h-auto">
              <h3 className="font-semibold font-sans text-green-800 mb-2">
                Giving our best effort in every project
              </h3>
              <p className="text-sm font-medium text-black">
                We are committed to delivering excellence by putting our utmost
                dedication, skills, and focus into every project, regardless of
                size or complexity.
              </p>
            </div>
          </div>
          {/* Misi 2 */}
          <div className="w-full flex flex-col gap-4 justify-start items-center text-center">
            <img
              src="/assets/image/misi2.png"
              className="w-48 md:w-64"
              alt="Zero Tolerance Safety"
            />
            <div className="flex flex-col justify-start items-center h-auto">
              <h3 className="font-semibold font-sans text-green-800 mb-2">
                Zero tolerance in Safety Issues
              </h3>
              <p className="text-sm font-medium text-black">
                We uphold the highest safety standards, ensuring a strict
                zero-tolerance policy toward any safety violations to protect
                our team, clients, and environment.
              </p>
            </div>
          </div>
          {/* Misi 3 */}
          <div className="w-full flex flex-col gap-4 justify-start items-center text-center">
            <img
              src="/assets/image/misi3.png"
              className="w-48 md:w-64"
              alt="Best Idea"
            />
            <div className="flex flex-col justify-start items-center h-auto">
              <h3 className="font-semibold font-sans text-green-800 mb-2">
                Always trying to give the best idea to solve problems
              </h3>
              <p className="text-sm font-medium text-black">
                We continuously strive to provide smart, efficient, and
                innovative solutions that address challenges effectively and
                support project success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
