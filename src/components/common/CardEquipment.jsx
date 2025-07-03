// src/components/common/CardEquipment.jsx

import React from "react";

const CardEquipment = ({ equipment }) => {
  if (!equipment) return null;

  const imageUrl = equipment.gambar_url
    ? `http://127.0.0.1:8000${equipment.gambar_url}`
    : "/assets/image/placeholder.png";

  return (
    <div className="flex flex-col justify-start items-start w-full h-auto border border-green-700/20 shadow-xl rounded-2xl overflow-hidden">
      {/* Gambar */}
      <div className="w-full h-60 bg-green-700 relative">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={equipment.nama_alat}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/image/placeholder.png";
          }}
        />
        <div className="flex flex-wrap gap-2 absolute bottom-2 left-4">
          <p className="text-xs text-white bg-black/40 rounded-full py-1 px-2">
            Tahun: {equipment.tahun}
          </p>
          <p className="text-xs text-white bg-black/40 rounded-full py-1 px-2">
            Berat: {equipment.berat} kg
          </p>
          <p className="text-xs text-white bg-black/40 rounded-full py-1 px-2">
            Versi: {equipment.versi}
          </p>
        </div>
      </div>

      {/* Konten */}
      <div className="p-4 flex flex-col justify-between text-sm text-gray-700 w-full">
        <div className="flex flex-col xl:flex-row justify-between items-start gap-1">
          <h3 className="text-lg lg:text-xl font-semibold text-[#00662C] line-clamp-1">
            {equipment.nama_alat}
          </h3>
          <p className="text-sm font-semibold text-gray-500">
            {equipment.jenis_alat}
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {equipment.description}
        </p>
      </div>
    </div>
  );
};

export default CardEquipment;
