// src/components/sections/portofolio/ListPortofolio.jsx

import React, { useContext } from "react";
import CardProject from "@/components/common/CardProject";
import { DataContext } from "@/context/DataContext";

const ListPortofolio = () => {
  const { portofolios, loading, error } = useContext(DataContext);

  // 1. Buat salinan dan urutkan portofolio
  //    Kita gunakan .slice() untuk membuat salinan agar tidak mengubah state asli di context
  const sortedPortofolios = portofolios
    .slice()
    .sort((a, b) => b.tahun - a.tahun); // Mengurutkan dari tahun terbesar ke terkecil

  return (
    <div className="w-full py-20 flex flex-col px-4 sm:px-8 md:px-20 lg:px-24 xl:px-36 justify-center items-center gap-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex flex-row gap-4 rounded-full px-8 sm:px-10 py-2 bg-[#00662C]/10">
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
            Portfolio Project's
          </p>
        </div>
        <h1 className="text-[#00662C] text-2xl sm:text-3xl font-semibold max-w-lg">
          Successful Projects We've Handled
        </h1>
      </div>

      {loading ? (
        <p className="text-center text-gray-500 mt-10">
          Memuat data portofolio...
        </p>
      ) : error ? (
        <p className="text-center text-red-500 mt-10">
          Gagal memuat data portofolio.
        </p>
      ) : sortedPortofolios.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          Belum ada portofolio yang tersedia.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
          {/* 2. Gunakan array yang sudah diurutkan untuk di-render */}
          {sortedPortofolios.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListPortofolio;
