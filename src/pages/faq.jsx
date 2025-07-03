// src/pages/faq.jsx

import React, { useContext } from "react"; // Impor useContext, hapus useState dan useEffect
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CardFAQ from "@/components/common/CardFAQ";
import { DataContext } from "@/context/DataContext"; // Impor DataContext

const FaqPage = () => {
  // Ambil data faqs, loading, dan error dari context
  const { faqs, loading, error } = useContext(DataContext);

  return (
    <div className="flex flex-col justify-start items-start bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-row w-full justify-center items-center h-80 sm:h-72 relative mt-20">
        <div className="w-full h-full absolute top-0 left-0 bg-black">
          <img
            className="w-full h-full object-cover opacity-90"
            src="/assets/image/bg-faq2.png"
            alt="FAQ Background"
          />
        </div>
        <div className="z-10 flex flex-col justify-center items-center w-full h-full gap-4 text-white text-center px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-sm font-medium max-w-4xl">
            Find answers to common questions about our services, equipment,
            certifications, and processes. We’re here to help you make informed
            decisions with clarity and confidence.
          </p>
        </div>
      </div>

      {/* Daftar FAQ Section */}
      <div className="w-full px-4 sm:px-8 md:px-20 lg:px-40 py-10 flex flex-col gap-4">
        {loading ? (
          <p className="text-center text-gray-500 py-10">Memuat data FAQ...</p>
        ) : error ? (
          <p className="text-center text-red-500 py-10">
            Gagal memuat data FAQ.
          </p>
        ) : faqs.length > 0 ? (
          faqs.map((faqItem) => (
            <CardFAQ
              key={faqItem.id}
              question={faqItem.pertanyaan}
              answer={faqItem.jawaban}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 py-10">
            Tidak ada data FAQ yang tersedia saat ini.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

// Ubah nama export menjadi PascalCase sesuai konvensi React
export default FaqPage;
