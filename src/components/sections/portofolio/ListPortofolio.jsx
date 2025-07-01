// File: components/sections/home/ListPortofolio.jsx

import React, { useState, useEffect } from "react";
import CardProject from "@/components/common/CardProject"; // Pastikan path ini benar

const ListPortofolio = () => {
  // State untuk menyimpan data portofolio dari API
  const [portofolios, setPortofolios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fungsi untuk mengambil data dari API
    const fetchPortofolios = async () => {
      const token = "2|8veRdrHIjFL4LUrPGs6TB0jjltZlCAuu9F6wNrvl"; // Token API Anda

      try {
        const response = await fetch("http://127.0.0.1:8000/api/portofolios", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPortofolios(data); // Simpan data ke state
      } catch (error) {
        console.error("Gagal mengambil data portofolio:", error);
      } finally {
        setLoading(false); // Hentikan loading
      }
    };

    fetchPortofolios();
  }, []); // Efek ini hanya berjalan sekali saat komponen dimuat

  return (
    <div className="w-full py-20 flex flex-col px-36 justify-center items-center gap-10">
      <div className="flex flex-row gap-4 rounded-full px-10 py-2 bg-[#00662C]/10">
        {/* Mengganti ikon dengan inline SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-[#00662C]"
        >
          <path
            fillRule="evenodd"
            d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5.25-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-sm font-semibold text-[#00662C]">
          Portofolio Project's
        </p>
      </div>
      <h1 className="text-[#00662C] text-3xl font-semibold">
        Successful Projects We've Handled
      </h1>

      {loading ? (
        <p className="text-center text-gray-500 mt-10">
          Memuat data portofolio...
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center w-full">
          {/* Loop melalui data portofolio dan render CardProject untuk setiap item */}
          {portofolios.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListPortofolio;
