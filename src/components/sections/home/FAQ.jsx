import React, { useState, useEffect } from "react";
import { TbZoomQuestionFilled } from "react-icons/tb";
import CardFAQ from "@/components/common/CardFAQ";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "http://127.0.0.1:8000/api/faqs";
  const numberOfFaqsToShow = 4;

  useEffect(() => {
    const fetchFaqs = async () => {
      const token = "2|8veRdrHIjFL4LUrPGs6TB0jjltZlCAuu9F6wNrvl";

      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          const errorBody = await response.json();
          throw new Error(
            `HTTP error! Status: ${response.status}, Message: ${
              errorBody.message || "Unknown error"
            }`
          );
        }

        const data = await response.json();
        const mainFaqs = data.slice(0, numberOfFaqsToShow);
        setFaqs(mainFaqs);
      } catch (err) {
        console.error("Gagal mengambil data FAQ:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div className="w-full py-10 px-4 md:px-40 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-6 justify-center items-center">
        <div className="flex flex-row gap-4 rounded-full px-6 md:px-10 py-2 mb-4 bg-[#00662C]/10">
          <TbZoomQuestionFilled size={22} color="#00662C" />
          <p className="text-sm font-semibold text-[#00662C]">FAQ</p>
        </div>
        <h1 className="text-2xl md:text-3xl text-[#00662C] font-semibold text-center">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="w-full px-4 md:px-12 py-6 flex flex-col gap-4">
        {loading ? (
          <p className="text-center text-gray-500">Memuat FAQ...</p>
        ) : error ? (
          <p className="text-center text-red-600">Error: {error}</p>
        ) : faqs.length > 0 ? (
          faqs.map((faqItem) => (
            <CardFAQ
              key={faqItem.id}
              question={faqItem.pertanyaan} // **PERBAIKAN DI SINI**
              answer={faqItem.jawaban} // **PERBAIKAN DI SINI**
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
          className="px-8 py-3 text-base font-medium text-white bg-[#00662C] rounded-full hover:text-[#00662C] hover:bg-transparent border border-[#00662C] hover:transition-all hover:duration-300 duration-300 transition-all hover:ease-in-out ease-in-out"
          href="/faq"
        >
          See More
        </a>
      </div>
    </div>
  );
};

export default FAQ;
