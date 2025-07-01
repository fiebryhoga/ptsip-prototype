import React, { useState, useEffect } from "react";

const Hero = () => {
  // State untuk menyimpan nomor WhatsApp dari API
  const [whatsAppNumber, setWhatsAppNumber] = useState("");

  useEffect(() => {
    // Fungsi untuk mengambil data kontak dari API
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
        console.error("Gagal mengambil info kontak untuk Hero:", error);
      }
    };

    fetchContactInfo();
  }, []); // [] memastikan fetch hanya berjalan sekali

  return (
    <div className="flex flex-row justify-center items-center w-full h-[90vh] mt-20 px-36 gap-10">
      <div className="w-1/2 p-8">
        <img src="assets/image/bg-equipment.png" alt="Equipment Background" />
      </div>
      <div className="w-1/2 flex flex-col flex-1/2 justify-start items-start gap-8">
        <h1 className="text-[40px] font-extrabold">
          Professional
          <span className="text-[#00662C]"> Heavy Lifting Specialists</span> for
          Every Project Need
        </h1>
        <p className="text-xl pr-4">
          Partner with us for comprehensive lifting, erection, and construction
          services tailored to diverse industry demands and project
          complexities.
        </p>

        <a
          href={whatsAppNumber ? `https://wa.me/${whatsAppNumber}` : "#"}
          target="_blank" // Buka di tab baru
          rel="noopener noreferrer" // Praktik keamanan
          className="flex flex-row font-normal text-base justify-center items-center py-3 px-10 gap-4 bg-[#00662C] text-white rounded-4xl hover:bg-transparent hover:text-[#4F7303] transition-colors ease-in-out duration-500 border border-[#00662C]"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Hero;
