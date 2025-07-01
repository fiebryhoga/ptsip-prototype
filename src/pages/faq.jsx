// pages/faq.jsx

import React, { useState, useEffect } from "react";
// PERBAIKAN: Menggunakan alias path '@/' yang umum di Next.js.
// Pastikan ini sesuai dengan konfigurasi jsconfig.json atau tsconfig.json Anda.
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CardFAQ from "@/components/common/CardFAQ";

const faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true); // 1. State untuk loading

  useEffect(() => {
    const fetchFaqs = async () => {
      const token = "2|8veRdrHIjFL4LUrPGs6TB0jjltZlCAuu9F6wNrvl";

      try {
        const response = await fetch("http://127.0.0.1:8000/api/faqs", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error("Gagal mengambil data FAQ:", error);
      } finally {
        setLoading(false); // 2. Hentikan loading, baik berhasil maupun gagal
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div
      className={`flex flex-col justify-start items-start bg-white min-h-screen`}
    >
      <Navbar />
      <div className="flex flex-row w-full justify-center items-center h-72 relative mt-20">
        <div className="w-full h-full absolute mt-1 bg-black">
          <img
            className="w-full h-full object-cover opacity-90"
            src="/assets/image/bg-faq2.png"
            alt=""
          />
        </div>
        <div className="z-10 flex flex-col justify-center items-center w-full h-full gap-4 text-white">
          <h1 className="text-4xl font-semibold">Frequently Asked Questions</h1>
          <p className="text-center text-sm font-medium px-96">
            Find answers to common questions about our services, equipment,
            certifications, and processes. We’re here to help you make informed
            decisions with clarity and confidence.
          </p>
        </div>
      </div>

      <div className="w-full px-40 py-6 flex flex-col gap-4">
        {/* 3. Logika tampilan diperbarui dengan state loading */}
        {loading ? (
          <p className="text-center text-gray-500">Memuat data FAQ...</p>
        ) : faqs.length > 0 ? (
          faqs.map((faq) => (
            <CardFAQ
              key={faq.id}
              question={faq.pertanyaan} // BENAR
              answer={faq.jawaban} // BENAR
            />
          ))
        ) : (
          <p className="text-center text-gray-500">
            Tidak ada data FAQ yang tersedia saat ini.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default faq;
