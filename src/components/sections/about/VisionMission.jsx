import React from 'react'
import { RiBuilding3Fill } from "react-icons/ri";


const VisionMission = () => {
  return (
    <div className="flex flex-col md:flex-col justify-center items-start w-full min-h-screen px-8 md:px-36 py-12 bg-white gap-16">
      <div className="flex flex-col justify-center items-center w-full gap-12">
        <div className="flex flex-row justify-center items-center gap-4 rounded-full px-10 py-2 bg-[#00662C]/10">
          <RiBuilding3Fill size={22} color="#00662C" />
          <p className="text-lg font-semibold text-[#00662C]">Our Vision</p>
        </div>
        <div className="w-full flex flex-row gap-12 ">
          <div className="w-1/2 h-auto relative">
            <img
              src="/assets/image/service/img1.jpg"
              className="w-full h-72 object-cover rounded-xl"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-12 justify-center items-center h-auto w-1/2">
            <p className="text-green-800 font-semibold text-lg text-justify font-sans">
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

      <div className="flex flex-col justify-center items-center w-full gap-12">
        <div className="flex flex-row justify-center items-center gap-4 rounded-full px-10 py-2 bg-[#00662C]/10">
          <RiBuilding3Fill size={22} color="#00662C" />
          <p className="text-lg font-semibold text-[#00662C]">Our Mission</p>
        </div>
        <div className="grid grid-cols-3 gap-8 w-full">
          <div className="w-full flex flex-col gap-4 justify-start items-center relative">
            <img src="/assets/image/misi1.png" className="w-64" alt="" />

            <div className="flex flex-col justify-between items-center h-32">
              <h3 className="font-semibold font-sans text-green-800 bottom-0 text-center">
                Giving our best effort in every project
              </h3>
              <p className="text-sm font-medium text-black text-center">
                We are committed to delivering excellence by putting our utmost
                dedication, skills, and focus into every project, regardless of
                size or complexity.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 justify-start items-center relative">
            <img src="/assets/image/misi2.png" className="w-64" alt="" />
            <div className="flex flex-col justify-between items-center h-32">
              <h3 className="font-semibold font-sans text-green-800 bottom-0 text-center">
                Zero tolerance in Safety Issues
              </h3>
              <p className="text-sm font-medium text-black text-center">
                We uphold the highest safety standards, ensuring a strict
                zero-tolerance policy toward any safety violations to protect
                our team, clients, and environment.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 justify-start items-center relative">
            <img src="/assets/image/misi3.png" className="w-64" alt="" />
            <div className="flex flex-col justify-between items-center h-32">
              <h3 className="font-semibold font-sans text-green-800 bottom-0 text-center">
                Always trying to give the best idea to solve problems in the
                project
              </h3>
              <p className="text-sm font-medium text-black text-center">
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
}

export default VisionMission
