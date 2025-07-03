import React from "react";
import {
  FaHandshake,
  FaUserGraduate,
  FaAward,
  FaShieldAlt,
} from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { BsFillPatchQuestionFill } from "react-icons/bs";

const CoreValue = () => {
  return (
    <div className="w-full flex flex-col justify-start items-end gap-12 md:gap-16 lg:gap-24 relative">
      <img
        className="w-full h-full object-cover absolute"
        src="/assets/image/bg-core4.png"
        alt=""
      />
      <div className="flex flex-col justify-center items-center gap-2 xl:px-60 z-10 mt-0">
        <div className="flex flex-row gap-2 bg-[#00662C] rounded-4xl py-2 px-6 mb-6 text-sm font-semibold text-[#ffffff]">
          <BsFillPatchQuestionFill size={22} />
          <p>Why us?</p>
        </div>

        <p className="text-sm text-[#00662C] text-center px-6 sm:px-12 md:px-32 lg:px-48 xl:px-64">
          We uphold values that define us, shape our culture, guide our actions,
          and reinforce our commitment to trusted, high-quality, and impactful
          solutions.
        </p>
      </div>

      <div className="flex flex-col gap-2 md:gap-10 px-6 sm:px-10 md:px-20 lg:px-24 xl:px-40 z-10 lg:pb-20">
        {/* Baris 1 */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-8">
          <ValueCard
            icon={<FaHandshake size={30} color="white" />}
            title="Kolaboratif (Collaborative)"
            text="We are committed to building strong synergy through meaningful and strategic collaboration with both partners and clients, ensuring that every cooperation brings mutual growth, benefit, and long-term value."
          />
          <ValueCard
            icon={<FaUserGraduate size={30} color="white" />}
            title="Kompeten (Competent)"
            text="We continuously strive to enhance our capabilities through learning, innovation, and professional development enabling us to deliver excellent services that exceed our customers’ expectations in every opportunity."
          />
          <ValueCard
            icon={<FaHeartCircleCheck size={30} color="white" />}
            title="Harmonis (Harmonious)"
            text="We value harmonious relationships and always maintain a respectful, caring, and positive environment across all elements of the company, from internal teams to external stakeholders."
          />
        </div>

        {/* Baris 2 */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-8">
          <ValueCard
            icon={<FaAward size={30} color="white" />}
            title="Mutu (Quality)"
            text="We uphold the highest standards of service and work quality as our core priorities, ensuring that every output we deliver reflects excellence, reliability, and continuous improvement."
          />
          <ValueCard
            icon={<FaShieldAlt size={30} color="white" />}
            title="Amanah (Trust)"
            text="We honor the trust entrusted to us by being consistently honest, transparent, and responsible delivering our best efforts in every task to maintain credibility and long-term confidence."
          />
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ icon, title, text }) => (
  <div className="bg-green-900/20 px-6 py-2 rounded-lg flex flex-col max-w-xs sm:max-w-sm md:max-w-md flex-1">
    <div className="flex flex-row gap-2 items-center mb-2">
      <div className="rounded-full h-14 w-14 flex justify-center items-center bg-black/20">
        {icon}
      </div>
      <h2 className="text-white text-lg md:text-xl font-semibold">{title}</h2>
    </div>
    <p className="text-white text-sm text-justify">{text}</p>
  </div>
);

export default CoreValue;
