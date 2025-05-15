import React from "react";
import { TbZoomQuestionFilled } from "react-icons/tb";
import CardFAQ from "../../common/CardFAQ";

const FAQ = () => {
  return (
    <div className="w-full py-10 px-40 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-6 jutify-center items-center">
        {/* <div className="flex flex-row gap-2 py-2 px-10 bg-[#00662C]/20 justify-center items-center text-[#00662C] font-semibold text-sm rounded-full">
          <TbZoomQuestionFilled size={20} color="#00662C" /> FAQ's
        </div> */}
        <h1 className="text-3xl text-[#00662C] font-semibold">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="w-full px-12 py-6 flex flex-col gap-4">
        <CardFAQ />
        <CardFAQ />
        <CardFAQ />
        <CardFAQ />
      </div>
    </div>
  );
};

export default FAQ;
