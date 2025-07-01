// File: components/sections/home/LegalInformation.jsx

import React, { useState, useEffect } from "react";
// Impor ikon yang akan kita gunakan
import { RiFileList3Line } from "react-icons/ri";
import CardLegal from "@/components/common/CardLegal"; // Pastikan path ini benar

const LegalInformation = () => {
  // State untuk menyimpan data legal dari API
  const [legalInfos, setLegalInfos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fungsi untuk mengambil data dari API
    const fetchLegalInfo = async () => {
      const token = "2|8veRdrHIjFL4LUrPGs6TB0jjltZlCAuu9F6wNrvl"; // Token API Anda

      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/legal_informations",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setLegalInfos(data); // Simpan data ke state
      } catch (error) {
        console.error("Gagal mengambil data legal:", error);
      } finally {
        setLoading(false); // Hentikan loading
      }
    };

    fetchLegalInfo();
  }, []); // Efek ini hanya berjalan sekali saat komponen dimuat

  return (
    <div className="px-36 flex flex-col justify-center items-center w-full pb-20">
      <div className="flex flex-row gap-4 rounded-full px-10 py-2 bg-[#00662C]/10">
        <RiFileList3Line size={22} color="#00662C" />
        <p className="text-lg font-semibold text-[#00662C]">
          Legal Informations
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 py-10 w-full">
        {loading ? (
          <p className="col-span-full text-center text-gray-500">
            Memuat informasi legal...
          </p>
        ) : (
          legalInfos.map((item) => (
            <CardLegal
              key={item.id}
              // Mengirim data dari API ke komponen CardLegal
              title={item.nama}
              description={item.number}
              // Menggunakan satu ikon generik untuk semua item
              icon={RiFileList3Line}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default LegalInformation;
