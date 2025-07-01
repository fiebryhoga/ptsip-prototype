"use client";

import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const JustView = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full min-h-screen px-8 md:px-36 py-12 bg-white">
      {/* Left Section - Optional Image */}
      <div className="w-full md:w-4/12 mb-8 md:mb-0 flex justify-center items-center">
        <img
          src="/assets/image/logo2.png"
          alt="PT Sarana Inti Perwira Logo"
          className="w-64 object-contain"
        />
      </div>

      {/* Right Section - Content */}
      <div className="w-full md:w-8/12 flex flex-col p-8 rounded-lg">
        <h3 className="text-3xl font-bold text-green-800 mb-4">
          PT Sarana Inti Perwira
        </h3>
        <p className="text-gray-800 mb-6 leading-relaxed">
          <strong>PT Sarana Inti Perwira</strong> is a construction company in
          Indonesia that focuses on heavy lifting, mechanical installation,
          steel structure erection, and infrastructure development. We are
          committed to delivering excellent service in various industrial and
          infrastructure projects, both on-shore and off-shore.
        </p>

        <h4 className="text-xl font-semibold text-green-800 mb-3">
          Our Business Approach
        </h4>
        <ul className="space-y-3 mb-6">
          <li className="flex flex-row items-center art gap-2">
            <IoIosCheckmarkCircle className="text-green-800 mt-1 w-1/12" size={20} />
            <span className="w-11/12">
              <strong>Project Preparation Stage:</strong> Involves project
              analysis and consultation with the client to define work methods
              and equipment suitability. Engineering drawings and plans are
              produced through an iterative, adaptive planning process.
            </span>
          </li>
          <li className="flex flex-row items-center art gap-2">
            <IoIosCheckmarkCircle className="text-green-800 mt-1 w-1/12" size={20} />
            <span className="w-11/12">
              We create a project document including Standard Management System,
              Authorization, and Control System as guidance during execution.
            </span>
          </li>
          <li className="flex flex-row items-center art gap-2">
            <IoIosCheckmarkCircle className="text-green-800 mt-1 w-1/12" size={20} />
            <span className="w-11/12">
              <strong>Project Execution Stage:</strong> We apply a reliable
              Operation Management System built from years of experience in the
              field. We prioritize Health, Safety & Environment (HSE),
              operational discipline, daily briefings, and strong client
              communication to ensure project success.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JustView;
