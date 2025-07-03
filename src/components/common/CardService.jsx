// src/components/common/CardService.jsx

import React from "react";

const CardService = ({ imageUrl, title, description }) => {
  return (
    <div
      className="group w-full flex flex-col lg:flex-row rounded-xl h-auto lg:h-52 shadow-lg 
                 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out
                 bg-white" // Tambahkan bg-white untuk memastikan konsistensi
    >
      {/* Kolom Gambar */}
      <div className="w-full lg:w-2/5 h-48 lg:h-full rounded-t-xl lg:rounded-l-xl lg:rounded-t-none overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" // Efek zoom pada gambar
          src={imageUrl}
          alt={title}
          onError={(e) => {
            e.target.onerror = null; // Mencegah loop error jika placeholder juga gagal
            e.target.src = "/assets/image/placeholder.png";
          }}
        />
      </div>

      {/* Kolom Konten */}
      <div
        className="w-full lg:w-3/5 flex flex-col border border-t-0 lg:border-t lg:border-l-0 border-gray-200 
                 rounded-b-xl lg:rounded-r-xl lg:rounded-b-none 
                 p-4 lg:p-6 justify-center" // Padding disesuaikan untuk mobile
      >
        <div className="flex flex-col gap-2">
          {" "}
          {/* Mengurangi gap untuk tampilan lebih rapat */}
          <h3 className="text-[#00662C] text-lg font-semibold line-clamp-2">
            {title}
          </h3>
          <p className="text-sm font-normal text-gray-700 text-justify line-clamp-4">
            {" "}
            {/* Warna teks dibuat lebih standar */}
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardService;
