import React from "react";
import { FaHandshake } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { BsFillPatchQuestionFill } from "react-icons/bs";






const CoreValue = () => {
  return (
    <div className="w-full px-40 bg-[#00662C] flex flex-col justify-center items-center h-[100vh] gap-16">
      <div className="flex flex-col justify-center items-center gap-2 px-20">
        <div className="flex flex-row gap-2 bg-white rounded-4xl py-2 px-6 mb-12 text-sm font-semibold text-[#00662C]">
          <BsFillPatchQuestionFill size={22}/><p>Why us?</p>
        </div>

        <h1 className="text-4xl text-center font-bold text-white">KKHARISMA</h1>
        <p className="text-sm text-white text-center px-64">
          We uphold values that define us, shape our culture, guide our actions,
          and reinforce our commitment to trusted, high-quality, and impactful
          solutions.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-between items-start gap-20">
          <div className="w-80 flex flex-col justify-start items-start gap-4">
            <div className=" flex flex-row gap-2 justify-start items-center">
              <div className="rounded-full h-16 w-16 flex flex-row justify-center items-center px-1 py-1 bg-black/20">
                <FaHandshake size={30} color="white" />
              </div>
              <h2 className=" text-white text-xl pb-1 font-semibold text-center">
                Kolaboratif (Collaborative)
              </h2>
            </div>

            <p className="text-white text-sm text-justify">
              We are committed to building strong synergy through meaningful and
              strategic collaboration with both partners and clients, ensuring
              that every cooperation brings mutual growth, benefit, and
              long-term value.
            </p>
          </div>
          <div className="w-80 flex flex-col justify-start items-start gap-4">
            <div className=" flex flex-row gap-2 justify-start items-center">
              <div className="rounded-full h-16 w-16 flex flex-row justify-center items-center px-1 py-1 bg-black/20">
                <FaUserGraduate size={30} color="white" />
              </div>
              <h2 className=" text-white text-xl pb-1 font-semibold text-center">
                Kompeten (Competent)
              </h2>
            </div>

            <p className="text-white text-sm text-justify">
              We continuously strive to enhance our capabilities through
              learning, innovation, and professional development enabling us to
              deliver excellent services that exceed our customers’ expectations
              in every opportunity.
            </p>
          </div>
          <div className="w-80 flex flex-col justify-start items-start gap-4">
            <div className=" flex flex-row gap-2 justify-start items-center">
              <div className="rounded-full h-16 w-16 flex flex-row justify-center items-center px-1 py-1 bg-black/20">
                <FaHeartCircleCheck size={30} color="white" />
              </div>
              <h2 className=" text-white text-xl pb-1 font-semibold text-center">
                Harmonis (Harmonius)
              </h2>
            </div>

            <p className="text-white text-sm text-justify">
              We value harmonious relationships and always maintain a
              respectful, caring, and positive environment across all elements
              of the company, from internal teams to external stakeholders.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-start gap-20">
          <div className="w-80 flex flex-col justify-start items-start gap-4">
            <div className=" flex flex-row gap-2 justify-start items-center">
              <div className="rounded-full h-16 w-16 flex flex-row justify-center items-center px-1 py-1 bg-black/20">
                <FaAward size={30} color="white" />
              </div>
              <h2 className=" text-white text-xl pb-1 font-semibold text-center">
                Mutu (Quality)
              </h2>
            </div>

            <p className="text-white text-sm text-justify">
              We uphold the highest standards of service and work quality as our
              core priorities, ensuring that every output we deliver reflects
              excellence, reliability, and continuous improvement.
            </p>
          </div>
          <div className="w-80 flex flex-col justify-start items-start gap-4">
            <div className=" flex flex-row gap-2 justify-start items-center">
              <div className="rounded-full h-16 w-16 flex flex-row justify-center items-center px-1 py-1 bg-black/20">
                <FaShieldAlt size={30} color="white" />
              </div>
              <h2 className=" text-white text-xl pb-1 font-semibold text-center">
                Amanah (Trust)
              </h2>
            </div>

            <p className="text-white text-sm text-justify">
              We honor the trust entrusted to us by being consistently honest,
              transparent, and responsible delivering our best efforts in every
              task to maintain credibility and long-term confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValue;
