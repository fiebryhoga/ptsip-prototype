// src/components/sections/home/FAQ.jsx

import React, { useContext } from "react"; // Impor useContext
import { TbZoomQuestionFilled } from "react-icons/tb";
import CardFAQ from "@/components/common/CardFAQ";
import { DataContext } from "@/context/DataContext"; // Impor DataContext

const FAQ = () => {
  // Ambil data faqs, loading, dan error dari context
  const { faqs, loading, error } = useContext(DataContext);

  // Batasi jumlah FAQ yang ditampilkan di halaman utama
  const numberOfFaqsToShow = 4;
  const mainFaqs = faqs.slice(0, numberOfFaqsToShow);

  return (
    <div className="w-full px-4 md:px-20 lg:px-40 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-6 justify-center items-center text-center">
        <div className="flex flex-row gap-4 rounded-full px-6 md:px-10 py-2 mb-4 bg-[#00662C]/10">
          <TbZoomQuestionFilled size={22} color="#00662C" />
          <p className="text-sm font-semibold text-[#00662C]">
            Frequently Asked Questions
          </p>
        </div>
      </div>

      <div className="w-full px-0 sm:px-4 md:px-12 py-6 flex flex-col gap-4">
        {loading ? (
          <p className="text-center text-gray-500">Memuat FAQ...</p>
        ) : error ? (
          <p className="text-center text-red-600">Error: {error}</p>
        ) : mainFaqs.length > 0 ? (
          mainFaqs.map((faqItem) => (
            <CardFAQ
              key={faqItem.id}
              question={faqItem.pertanyaan}
              answer={faqItem.jawaban}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">
            Tidak ada FAQ yang tersedia saat ini.
          </p>
        )}
      </div>

      <div className="flex flex-row justify-center items-center mt-8">
        <a
          className="px-8 py-3 text-base font-medium text-white bg-[#00662C] rounded-full hover:text-[#00662C] hover:bg-transparent border border-[#00662C] transition-all duration-300 ease-in-out"
          href="/faq"
        >
          See More
        </a>
      </div>
    </div>
  );
};

export default FAQ;
