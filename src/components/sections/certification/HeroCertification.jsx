import React, { useState, useEffect } from "react";

const HeroCertification = () => {
  const [whatsAppNumber, setWhatsAppNumber] = useState("");

  useEffect(() => {
    const fetchContactInfo = async () => {
      const apiUrl = "http://127.0.0.1:8000/api/contacts";
      const token = "2|8veRdrHIjFL4LUrPGs6TB0jjltZlCAuu9F6wNrvl";

      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          if (data && data.nomor_wa) {
            setWhatsAppNumber(data.nomor_wa);
          }
        }
      } catch (error) {
        console.error(
          "Gagal mengambil info kontak untuk HeroCertification:",
          error
        );
      }
    };

    fetchContactInfo();
  }, []); // [] memastikan fetch hanya berjalan sekali

  return (
    <div className="py-40 pt-60 flex flex-row w-full px-36">
      <div className="flex flex-col gap-12 justify-center items-start w-3/5">
        <h1 className="text-6xl font-semibold text-[#00662C] leading-16">
          Our Certifications
        </h1>
        <p className="pr-24 text-justify text-base font-medium">
          Our certifications reflect our unwavering commitment to quality,
          safety, and professionalism in every project we undertake. They serve
          as a testament to our compliance with national and international
          standards in construction and engineering.
        </p>

        {/* --- PERBAIKAN PADA TOMBOL CONTACT US --- */}
        <a
          // Arahkan ke URL wa.me dengan nomor dari state
          href={whatsAppNumber ? `https://wa.me/${whatsAppNumber}` : "#"}
          target="_blank" // Buka di tab baru
          rel="noopener noreferrer" // Praktik keamanan
          className="px-10 py-3 rounded-lg bg-[#00662C] text-white border border-[#00662C]/40 hover:bg-transparent hover:text-[#00662C]"
        >
          Contact Us for Detail
        </a>
      </div>
      <div className="w-2/5 flex flex-row justify-center items-center">
        <img src="/assets/image/cer3.png" alt="Certifications" />
      </div>
    </div>
  );
};

export default HeroCertification;
